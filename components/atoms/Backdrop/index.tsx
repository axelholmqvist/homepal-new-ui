import React, { ElementType, ReactNode } from "react";
import { Backdrop as MUIBackdrop } from "@mui/material";

interface BackdropProps {
  open: boolean;
  children?: ReactNode;
  component?: ElementType<any>;
  sx?: object;
}

const Backdrop = React.forwardRef((props: BackdropProps, ref: any) => (
  <MUIBackdrop {...props} ref={ref} />
));

Backdrop.displayName = "Backdrop";
export default Backdrop;
