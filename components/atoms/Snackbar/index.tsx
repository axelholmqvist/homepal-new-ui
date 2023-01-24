import React, { ElementType, ReactElement, ReactNode } from "react";
import { Snackbar as MUISnackbar } from "@mui/material";

interface SnackbarProps {
  action?: ReactNode;
  anchorOrigin?: {
    horizontal: "center" | "left" | "right";
    vertical: "bottom" | "top";
  };
  autoHideDuration?: number;
  children?: ReactElement<any>;
  component?: ElementType<any>;
  message?: ReactNode;
  onClose?: () => void;
  open?: boolean | false;
  sx?: object;
}

const Snackbar = React.forwardRef((props: SnackbarProps, ref: any) => {
  return (
    <MUISnackbar {...props} ref={ref}>
      {props.children}
    </MUISnackbar>
  );
});

Snackbar.displayName = "Snackbar";
export default Snackbar;
