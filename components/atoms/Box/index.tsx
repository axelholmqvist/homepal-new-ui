import React, { ElementType, ReactNode } from "react";
import { Box as MUIBox } from "@mui/material";

interface BoxProps {
  children?: ReactNode;
  component?: ElementType<any>;
  sx?: object;
}

const Box = React.forwardRef((props: BoxProps, ref: any) => (
  <MUIBox {...props} ref={ref}>
    {props.children}
  </MUIBox>
));

Box.displayName = "Box";
export default Box;
