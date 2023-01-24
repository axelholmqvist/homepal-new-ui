import React, { ElementType, ReactNode } from "react";
import { MenuItem as MUIMenuItem } from "@mui/material";

interface MenuItemProps {
  children?: ReactNode;
  component?: ElementType<any>;
  dense?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  sx?: object;
}

const MenuItem = React.forwardRef((props: MenuItemProps, ref: any) => (
  <MUIMenuItem {...props} ref={ref}>
    {props.children}
  </MUIMenuItem>
));

MenuItem.displayName = "MenuItem";
export default MenuItem;
