import React, { ElementType } from "react";
import * as MUIIcon from "@mui/icons-material";

export type IconNames = keyof typeof MUIIcon;

interface IconProps {
  color?:
    | "inherit"
    | "action"
    | "disabled"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  component?: ElementType<any>;
  fontSize?: "large" | "medium" | "small";
  name: IconNames;
  sx?: object;
}

const Icon = React.forwardRef((props: IconProps, ref: any) => {
  const { name, ...rest } = props;
  const Icon = MUIIcon[name];

  return Icon ? <Icon {...rest} ref={ref} /> : null;
});

Icon.displayName = "Icon";
export default Icon;
