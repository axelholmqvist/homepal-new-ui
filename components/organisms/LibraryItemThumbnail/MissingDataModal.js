import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";
import Divider from "@components/atoms/Divider";

const attributes = [
  { name: "Fastighet ID", hasData: true },
  { name: "Fastighetsnamn", hasData: true },
  { name: "Arbetsorder ID", hasData: false },
  { name: "Arbetsordernummer", hasData: false },
  { name: "Arbetsorderkategori", hasData: false },
  { name: "Arbetsordertyp", hasData: false },
  { name: "Registreringsdatum", hasData: false },
];

const MissingDataModal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Data saknas</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Det behöver ansluta mer data för att kunna aktivera denna dashboard.
          <br /> Kontakta oss eller din systemägare för att ansluta mer data.
        </DialogContentText>
        {/* --- Attribut --- */}
        <Box
          sx={{
            my: 2,
            maxHeight: "300px",
            overflowY: "scroll",
          }}
        >
          <List>
            {attributes.map((attribute, i) => (
              <>
                <ListItem key={i}>
                  <ListItemIcon>
                    {attribute.hasData ? (
                      <Icon name="CheckCircle" color="success" />
                    ) : (
                      <Icon name="Cancel" color="text.secondary" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={attribute.name} />
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Box>
        {/* --- Attribut --- */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Stäng</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MissingDataModal;
