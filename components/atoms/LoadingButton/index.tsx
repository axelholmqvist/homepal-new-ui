import React, { ElementType, ReactNode } from "react";
import { LoadingButton as MUILoadingButton } from "@mui/lab";

interface LoadingButtonProps {
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
  loading?: boolean | undefined;
  loadingIndicator?: ReactNode;
  loadingPosition?: "start" | "end" | "center";
  size?: "small" | "medium" | "large";
  startIcon?: boolean;
  sx?: object;
  variant?: "contained" | "outlined" | "text";
}
const LoadingButton = React.forwardRef(
  (props: LoadingButtonProps, ref: any) => {
    return (
      <MUILoadingButton {...props} ref={ref}>
        {props.children}
      </MUILoadingButton>
    );
  }
);

LoadingButton.defaultProps = {
  variant: "contained",
};
LoadingButton.displayName = "Button";

export default LoadingButton;
