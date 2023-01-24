import React, { ElementType, ReactNode } from "react";
import { Badge as MUIBadge } from "@mui/material";

interface BadgeProps {
  badgeContent?: ReactNode;
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
  max?: number;
  showZero?: boolean;
  sx?: object;
  variant?: "dot" | "standard";
}

const Badge = React.forwardRef((props: BadgeProps, ref: any) => (
  <MUIBadge {...props} ref={ref}>
    {props.children}
  </MUIBadge>
));

Badge.displayName = "Badge";
export default Badge;
