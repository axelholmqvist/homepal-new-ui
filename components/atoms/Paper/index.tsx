import { Paper as MUIPaper } from "@mui/material";
import React, { ElementType, ReactNode } from "react";

interface PaperProps {
  children?: ReactNode;
  className?: string;
  component?: ElementType<any>;
  elevation?: number;
  square?: boolean;
  sx?: object;
  variant?: "elevation" | "outlined";
}

const Paper = React.forwardRef((props: PaperProps, ref: any) => {
  return (
    <MUIPaper {...props} ref={ref}>
      {props.children}
    </MUIPaper>
  );
});

Paper.displayName = "Paper";
export default Paper;
