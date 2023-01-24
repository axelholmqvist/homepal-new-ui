import { profile } from "@data/profile";
import { Box, TextField, IconButton, Tooltip, Avatar } from "@mui/material";

import Button from "@components/atoms/Button";
import AdvancedDialog from "@components/molecules/AdvancedDialog";

const EditProfileModal = ({ open, handleClose }) => {
  return (
    <AdvancedDialog
      title="Redigera profil"
      open={open}
      onClose={handleClose}
      actions={
        <>
          <Button variant="text" onClick={handleClose}>
            Avbryt
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Spara
          </Button>
        </>
      }
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 1,
          p: 1,
          borderRadius: 1,
          bgcolor: "action.focus",
        }}
      >
        <Tooltip title="Ladda upp bild" arrow>
          <IconButton
            aria-label="upload picture"
            component="label"
            sx={{ position: "relative" }}
          >
            <Avatar
              sx={{ width: 128, height: 128 }}
              alt={`${profile.firstName} ${profile.lastName}`}
              src={profile.image}
            />
            <input hidden accept="image/*" type="file" />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          "& .MuiTextField-root:not(:last-child)": { mr: 1 },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <TextField
            label="Förnamn"
            defaultValue={profile.firstName}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Efternamn"
            defaultValue={profile.lastName}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Box>
        <Box>
          <TextField
            label="Email"
            defaultValue={profile.email}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </Box>
      </Box>
    </AdvancedDialog>
  );
};

export default EditProfileModal;
