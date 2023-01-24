import { FormControl, Select, Portal } from "@mui/material";

import Alert from "@components/atoms/Alert";
import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import MenuItem from "@components/atoms/MenuItem";
import TextField from "@components/atoms/TextField";
import Snackbar from "@components/atoms/Snackbar";

import SimpleDialog from "@components/molecules/SimpleDialog";

import { useState } from "react";

const InviteNewUserModal = ({ open, addUser, handleClose }) => {
  const [permission, setPermission] = useState("Visa");
  const [addSuccess, setAddSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePermission = (event) => {
    setPermission(event.target.value);
  };

  const handleCloseAddSuccessMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAddSuccess(false);
  };

  return (
    <>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        title="Lägg till en ny användare via email"
        contentText="Genom att lägga till en helt ny användare i en dashboard så lägger
            du också till den i din Homepal-organisation. Användaren kommer
            behöva sätta upp ett konto i Homepal innan den får åtkomst till
            denna dashboard."
        actions={
          <>
            <Button variant="text" onClick={handleClose}>
              Avbryt
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setAddSuccess(true);
                addUser(email);
                handleClose();
              }}
            >
              Lägg till
            </Button>
          </>
        }
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: "flex", gap: 1, mt: 2, mb: 1 }}
        >
          <TextField
            label="Email"
            variant="outlined"
            onChange={handleChange}
            fullWidth
            required
          />
          <FormControl sx={{ width: "15ch", mt: 2 }}>
            <Select
              defaultValue="Visa"
              value={permission}
              onChange={handleChangePermission}
            >
              <MenuItem value="Visa">Visa</MenuItem>
              <MenuItem value="Redigera">Redigera</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </SimpleDialog>

      {/* --- FEEDBACK --- */}
      <Portal>
        <Snackbar
          open={addSuccess}
          autoHideDuration={3000}
          onClose={handleCloseAddSuccessMessage}
        >
          <Alert
            onClose={handleCloseAddSuccessMessage}
            severity="success"
            sx={{ width: "100%" }}
          >
            Användare har lagts till
          </Alert>
        </Snackbar>
      </Portal>
    </>
  );
};

export default InviteNewUserModal;
