import React, { ElementType, ReactElement, ReactNode } from "react";
import { Typography as MUITypography } from "@mui/material";

interface TypographyProps {
  align?: "center" | "inherit" | "justify" | "left" | "right";
  children: ReactNode;
  color?: string;
  component?: ElementType<any>;
  fontWeight?: string;
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  sx?: object;
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
}

const Typography = React.forwardRef((props: TypographyProps, ref: any) => {
  return (
    <MUITypography {...props} ref={ref}>
      {props.children}
    </MUITypography>
  );
});

Typography.displayName = "Typography";
export default Typography;
