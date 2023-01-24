import React, { ElementType, ReactNode } from "react";
import { IconButton as MUIIconButton } from "@mui/material";
import { MouseEvent } from "react";

interface IconButtonProps {
  children?: ReactNode;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  component?: ElementType<any>;
  disabled?: boolean;
  disableRipple?: boolean;
  edge?: "end" | "start" | false;
  href?: string;
  onClick?: (e?: any) => void;
  size?: "small" | "medium" | "large";
  sx?: object;
  variant?: "contained" | "outlined" | "text";
}

const IconButton = React.forwardRef((props: IconButtonProps, ref: any) => {
  return (
    <MUIIconButton {...props} ref={ref}>
      {props.children}
    </MUIIconButton>
  );
});

IconButton.displayName = "IconButton";
export default IconButton;
