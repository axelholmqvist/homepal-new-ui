import React, { ElementType, ReactNode } from "react";
import { Fab as MUIFab } from "@mui/material";

interface FabProps {
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
  disabled?: boolean;
  disableRipple?: boolean;
  href?: string;
  size?: "small" | "medium" | "large";
  sx?: object;
  variant?: "circular" | "extended";
}

const Fab = React.forwardRef((props: FabProps, ref: any) => {
  return (
    <MUIFab {...props} ref={ref}>
      {props.children}
    </MUIFab>
  );
});

Fab.displayName = "Fab";
export default Fab;
