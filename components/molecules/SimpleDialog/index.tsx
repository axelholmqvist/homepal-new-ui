import React, { ElementType, ReactNode } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";

interface SimpleDialogProps {
  actions?: ReactNode;
  children: ReactNode;
  component?: ElementType<any>;
  contentText?: string;
  fullWidth?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  onClose?: () => void;
  open: boolean;
  sx?: object;
  title?: string;
}

const SimpleDialog = React.forwardRef((props: SimpleDialogProps, ref: any) => {
  const { actions, children, contentText, title, ...rest } = props;

  return (
    <Dialog {...rest}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        {props.contentText ? (
          <DialogContentText>{props.contentText}</DialogContentText>
        ) : null}
        {props.children}
      </DialogContent>
      <DialogActions>{props.actions}</DialogActions>
    </Dialog>
  );
});

SimpleDialog.defaultProps = {
  maxWidth: "sm",
  fullWidth: true,
};

SimpleDialog.displayName = "SimpleDialog";
export default SimpleDialog;
