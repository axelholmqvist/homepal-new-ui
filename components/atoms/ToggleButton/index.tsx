import React, { ElementType, ReactElement } from "react";
import { ToggleButtonGroup as MUIToggleButtonGroup } from "@mui/material";
import { ToggleButton as MUIToggleButton } from "@mui/material";

interface ToggleButtonProps {
  children: ReactElement;
  component?: ElementType<any>;
  color?:
    | "standard"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  exclusive?: boolean;
  fullWidth?: boolean;
  items: { value: any; title: string }[];
  onChange?: () => void;
  orientation?: "horizontal" | "vertical";
  size?: "small" | "medium" | "large";
  sx?: object;
  value?: any;
}

const ToggleButton = React.forwardRef((props: ToggleButtonProps, ref: any) => {
  const { items, ...rest } = props;

  return (
    <MUIToggleButtonGroup {...rest} ref={ref}>
      {items.map((item, i) => (
        <MUIToggleButton value={item.value} key={i}>
          {item.title}
        </MUIToggleButton>
      ))}
    </MUIToggleButtonGroup>
  );
});

ToggleButton.defaultProps = {
  color: "primary",
  exclusive: true,
  fullWidth: true,
};

ToggleButton.displayName = "ToggleButton";
export default ToggleButton;
