import { Select as MUISelect } from "@mui/material";
import { ElementType, ReactNode } from "react";

interface SelectProps {
  children?: ReactNode;
  component?: ElementType<any>;
  defaultValue?: ReactNode;
  displayEmpty?: boolean;
  elevation?: number;
  label?: ReactNode;
  MenuProps?: object;
  onChange?: () => void;
  onClose?: () => void;
  open?: boolean;
  renderValue?: () => ReactNode;
  sx?: object;
  value?: any;
  variant?: "filled" | "outlined" | "standard";
}

const Select = (props: SelectProps, ref: any) => {
  return (
    <MUISelect {...props} ref={ref}>
      {props.children}
    </MUISelect>
  );
};

Select.displayName = "Select";
export default Select;
