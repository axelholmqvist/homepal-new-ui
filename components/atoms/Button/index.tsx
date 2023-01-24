import React, { ElementType, ReactNode } from "react";
import { Button as MUIButton } from "@mui/material";

interface ButtonProps {
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
  endIcon?: ReactNode;
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  startIcon?: boolean;
  sx?: object;
  variant?: "contained" | "outlined" | "text";
}
const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  return (
    <MUIButton {...props} ref={ref}>
      {props.children}
    </MUIButton>
  );
});

Button.defaultProps = {
  variant: "contained",
};
Button.displayName = "Button";

export default Button;
