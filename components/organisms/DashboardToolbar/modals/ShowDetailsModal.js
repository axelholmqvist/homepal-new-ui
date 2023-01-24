import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ListItem,
  List,
  ListItemText,
  Box,
} from "@mui/material";

import Button from "@components/atoms/Button";

import AvatarGroup from "@components/molecules/AvatarGroup";
import { users } from "@data/users";

export default function ShowDetailsModal({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Visa detaljer</DialogTitle>
      <DialogContent>
        <List sx={{ width: "420px" }}>
          <ListItem>
            <ListItemText
              primary="Namn"
              secondary="Analys av arbetsorderkategorier"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Skapad"
              secondary="1 januari 2020 av Axel Holmqvist"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Senast uppdaterad"
              secondary="9 januari av Kevin Kimaryo"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Delas med"
              secondary={
                <Box sx={{ width: "fit-content" }}>
                  <AvatarGroup users={users} />
                </Box>
              }
            />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleClose}>
          Stäng
        </Button>
      </DialogActions>
    </Dialog>
  );
}
