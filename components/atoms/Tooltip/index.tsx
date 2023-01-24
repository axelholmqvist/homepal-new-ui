import React, { ElementType, ReactElement, ReactNode } from "react";
import { Tooltip as MUITooltip } from "@mui/material";

interface TooltipProps {
  arrow?: boolean;
  children: ReactElement;
  component?: ElementType<any>;
  disableHoverListener?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  sx?: object;
  title: ReactNode;
}

const Tooltip = React.forwardRef((props: TooltipProps, ref: any) => {
  return <MUITooltip {...props} ref={ref} />;
});

Tooltip.defaultProps = {
  arrow: true,
};

Tooltip.displayName = "Tooltip";
export default Tooltip;
