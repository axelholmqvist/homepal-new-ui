import React, { ElementType, ReactNode } from "react";
import { Stack as MUIStack } from "@mui/material";

interface StackProps {
  alignItems?: string;
  children?: ReactNode;
  component?: ElementType<any>;
  direction?: "column-reverse" | "column" | "row-reverse" | "row";
  divider?: ReactNode;
  justifyContent?: string;
  spacing?: number | string;
  sx?: object;
}

const Stack = React.forwardRef((props: StackProps, ref: any) => {
  return (
    <MUIStack {...props} ref={ref}>
      {props.children}
    </MUIStack>
  );
});

Stack.displayName = "Stack";
export default Stack;
