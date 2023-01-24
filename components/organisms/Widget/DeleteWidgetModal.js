import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import Button from "@components/atoms/Button";

export default function DeleteWidgetModal({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Radera widget</DialogTitle>
      <DialogContent>
        Vill du verkligen radera widget? Detta är permanent och går inte att
        ångra.
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleClose}>
          Avbryt
        </Button>
        <Button variant="contained" onClick={handleClose} color="danger">
          Radera
        </Button>
      </DialogActions>
    </Dialog>
  );
}
