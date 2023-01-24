import { Alert as MUIAlert } from "@mui/material";
import React, { ReactNode } from "react";

interface AlertProps {
  action?: ReactNode;
  children?: ReactNode;
  color?: "error" | "info" | "success" | "warning";
  icon?: ReactNode;
  onClose?: () => void;
  severity?: "error" | "info" | "success" | "warning";
  square?: boolean;
  sx?: object;
  variant?: "filled" | "outlined" | "standard";
}

const Alert = React.forwardRef((props: AlertProps, ref: any) => {
  return (
    <MUIAlert {...props} ref={ref}>
      {props.children}
    </MUIAlert>
  );
});

Alert.defaultProps = {
  sx: {
    "& .MuiAlert-icon": {
      p: "6px 0",
    },
  },
};

Alert.displayName = "Alert";
export default Alert;
