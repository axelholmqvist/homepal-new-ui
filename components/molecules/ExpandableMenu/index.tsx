import React from "react";

import { MenuList, Popper } from "@mui/material";
import { useRef, useState } from "react";

import Box from "@components/atoms/Box";
import MenuItem from "@components/atoms/MenuItem";
import Paper from "@components/atoms/Paper";

/** UNDER CONSTRUCTION!
 * This component is, at the moment, just a loose,
 * visual draft on an Expandable Menu (a.k.a. a Cascader).
 */

interface ExpandableMenuProps {
  options: OptionProps[];
}

const ExpandableMenu = React.forwardRef(
  (props: ExpandableMenuProps, ref: any) => {
    return (
      <Box ref={ref} sx={{ display: "flex" }}>
        <Paper>
          <MenuList>
            {props.options.map((option, i) => (
              <Option
                key={i}
                label={option.label}
                options={option.options}
                value={option.value}
              />
            ))}
          </MenuList>
        </Paper>
      </Box>
    );
  }
);

interface OptionProps {
  label: string;
  options: OptionProps[] | null;
  value: any;
}

const Option = (props: OptionProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  return (
    <MenuItem
      {...props}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span>{props.label}</span>
      <Popper
        anchorEl={ref.current}
        open={open}
        placement={"right-start"}
        modifiers={[
          {
            name: "flip",
            enabled: true,
          },
          {
            name: "preventOverflow",
            enabled: true,
            options: {
              boundariesElement: "viewport",
            },
          },
        ]}
        sx={{ zIndex: 1900 }}
      >
        {props.options !== null ? (
          <ExpandableMenu options={props.options} />
        ) : null}
      </Popper>
    </MenuItem>
  );
};

ExpandableMenu.displayName = "ExpandableMenu";
export default ExpandableMenu;
