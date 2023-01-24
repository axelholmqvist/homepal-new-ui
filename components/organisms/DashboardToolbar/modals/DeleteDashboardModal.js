import Button from "@components/atoms/Button";
import SimpleDialog from "@components/molecules/SimpleDialog";

const DeleteDashboardModal = ({ open, handleClose }) => {
  return (
    <SimpleDialog
      open={open}
      onClose={handleClose}
      title="Radera dashboard"
      actions={
        <>
          <Button variant="text" onClick={handleClose}>
            Avbryt
          </Button>
          <Button variant="contained" onClick={handleClose} color="danger">
            Radera
          </Button>
        </>
      }
    >
      Vill du verkligen radera dashboard? Detta är permanent och går inte att
      ångra.
    </SimpleDialog>
  );
};

export default DeleteDashboardModal;
