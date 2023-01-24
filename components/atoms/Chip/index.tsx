import React, { ReactElement, ElementType, ReactNode } from "react";
import { Chip as MUIChip } from "@mui/material";

interface ChipProps {
  avatar?: ReactElement;
  clickable?: boolean;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "black";
  component?: ElementType<any>;
  deleteIcon?: ReactElement;
  disabled?: boolean;
  icon?: ReactElement;
  label?: ReactNode;
  onClick?: () => void;
  onDelete?: () => void;
  size?: "medium" | "small";
  sx?: object;
  variant?: "filled" | "outlined";
}

const Chip = React.forwardRef((props: ChipProps, ref: any) => {
  return <MUIChip {...props} ref={ref} />;
});

Chip.displayName = "Chip";
export default Chip;
