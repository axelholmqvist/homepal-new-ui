import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import TextField from "@components/atoms/TextField";

import SimpleDialog from "@components/molecules/SimpleDialog";

const EditTitleModal = ({ open, handleClose }) => {
  return (
    <SimpleDialog
      title="Byt namn"
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
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          "& .MuiTextField-root:not(:last-child)": { mr: 1 },
        }}
      >
        <TextField
          label="Byt namn"
          defaultValue={"Analys av arbetsorderkategorier"}
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
      </Box>
    </SimpleDialog>
  );
};

export default EditTitleModal;
