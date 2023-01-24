import React, { ElementType, ReactNode } from "react";
import { Switch as MUISwitch } from "@mui/material";

interface SwitchProps {
  checked?: boolean;
  children?: ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  component?: ElementType<any>;
  defaultChecked?: boolean;
  disabled?: boolean;
  edge?: "end" | "start" | false;
  icon?: ReactNode;
  onChange?: () => void;
  required?: boolean;
  size?: "medium" | "small";
  sx?: object;
  value?: any;
}

const Switch = React.forwardRef((props: SwitchProps, ref: any) => {
  return <MUISwitch {...props} ref={ref} />;
});

Switch.displayName = "Switch";
export default Switch;
