import React, { ElementType, ReactNode } from "react";
import { TextField as MUITextField } from "@mui/material";

interface TextFieldProps {
  children?: ReactNode;
  component?: ElementType<any>;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  defaultValue?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  InputProps?: object;
  label?: ReactNode;
  margin?: "dense" | "none" | "normal";
  maxRows?: number | string;
  multiline?: boolean;
  name?: string;
  onChange?: () => void;
  placeolder?: string;
  required?: boolean;
  rows?: number | string;
  SelectProps?: object;
  size?: "medium" | "small";
  sx?: object;
  value?: any;
  variant?: "filled" | "outlined" | "standard";
}

const TextField = React.forwardRef((props: TextFieldProps, ref: any) => {
  return <MUITextField {...props} ref={ref} />;
});

TextField.defaultProps = {
  variant: "outlined",
  margin: "normal",
};

TextField.displayName = "TextField";
export default TextField;
