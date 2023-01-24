import React, { ElementType, ReactNode } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";

import Box from "@components/atoms/Box";
import Icon from "@components/atoms/Icon";
import IconButton from "@components/atoms/IconButton";

interface FullScreenDialogProps {
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

const FullScreenDialog = React.forwardRef(
  (props: FullScreenDialogProps, ref: any) => {
    const { actions, contentText, hero, title, ...rest } = props;

    return (
      <Dialog {...props} ref={ref}>
        {props.title ? (
          <DialogTitle>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {props.title}
              <IconButton onClick={props.onClose}>
                <Icon name="Close" />
              </IconButton>
            </Box>
          </DialogTitle>
        ) : null}
        {props.hero ?? null}
        <DialogContent dividers={true}>
          {props.contentText ? (
            <DialogContentText>{props.contentText}</DialogContentText>
          ) : null}
          {props.children}
        </DialogContent>
        {props.actions ? <DialogActions>{props.actions}</DialogActions> : null}
      </Dialog>
    );
  }
);

FullScreenDialog.defaultProps = {
  maxWidth: false,
  fullWidth: true,
};

FullScreenDialog.displayName = "FullScreenDialog";
export default FullScreenDialog;
