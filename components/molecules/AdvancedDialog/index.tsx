import React, { ElementType, ReactNode } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";

interface AdvancedDialogProps {
  actions?: ReactNode;
  children: ReactNode;
  component?: ElementType<any>;
  contentText?: string;
  fullWidth?: boolean;
  hero?: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  onClose?: () => void;
  open: boolean;
  sx?: object;
  title?: string;
}

const AdvancedDialog = React.forwardRef(
  (props: AdvancedDialogProps, ref: any) => {
    const { actions, children, contentText, hero, title, ...rest } = props;

    return (
      <Dialog {...rest} ref={ref}>
        {props.title ? <DialogTitle>{props.title}</DialogTitle> : null}
        {props.hero ?? null}
        <DialogContent dividers={true}>
          {props.contentText ? (
            <DialogContentText>{props.contentText}</DialogContentText>
          ) : null}
          {props.children}
        </DialogContent>
        <DialogActions>{props.actions}</DialogActions>
      </Dialog>
    );
  }
);

AdvancedDialog.defaultProps = {
  maxWidth: "md",
  fullWidth: true,
};

AdvancedDialog.displayName = "AdvancedDialog";
export default AdvancedDialog;
