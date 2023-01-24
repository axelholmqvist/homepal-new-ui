import React, { MouseEvent } from "react";

import { useState } from "react";

import { Menu, ListItemIcon, ListItemText } from "@mui/material";

import Divider from "@components/atoms/Divider";
import Icon, { IconNames } from "@components/atoms/Icon";
import IconButton from "@components/atoms/IconButton";
import MenuItem from "@components/atoms/MenuItem";
import Tooltip from "@components/atoms/Tooltip";

interface OptionProps {
  divider: boolean | null;
  icon: IconNames;
  onClick: () => void;
  title: string;
}

interface OptionsMenuProps {
  options: OptionProps[];
  tooltip: string;
}

const OptionsMenu = React.forwardRef((props: OptionsMenuProps, ref: any) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={props.tooltip}>
        <IconButton
          size="small"
          onClick={handleClick}
          color="inherit"
          ref={ref}
          sx={{ ml: 1 }}
        >
          <Icon fontSize="small" name="MoreVertOutlined" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
      >
        {props.options.map((option: OptionProps, i: number) => [
          <MenuItem
            onClick={() => {
              handleClose();
              option.onClick();
            }}
            key={i}
          >
            <ListItemIcon>
              <Icon name={option.icon} fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={option.title} />
          </MenuItem>,
          option.divider ? <Divider /> : null,
        ])}
      </Menu>
    </>
  );
});

OptionsMenu.displayName = "OptionsMenu";
export default OptionsMenu;
