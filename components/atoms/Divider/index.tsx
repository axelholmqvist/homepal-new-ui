import React, { ElementType, ReactNode } from "react";
import { Divider as MUIDivider } from "@mui/material";

interface DividerProps {
  children?: ReactNode;
  component?: ElementType<any>;
  flexItem?: boolean;
  light?: boolean;
  orientation?: "horizontal" | "vertical";
  sx?: object;
  textAlign?: "center" | "left" | "right";
  variant?: "fullWidth" | "inset" | "middle";
}

const Divider = React.forwardRef((props: DividerProps, ref: any) => {
  return <MUIDivider {...props} ref={ref} />;
});

Divider.displayName = "Divider";
export default Divider;
