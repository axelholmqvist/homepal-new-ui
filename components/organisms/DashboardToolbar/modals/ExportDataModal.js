import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";
import LoadingButton from "@components/atoms/LoadingButton";
import Typography from "@components/atoms/Typography";

import SimpleDialog from "@components/molecules/SimpleDialog";

import { useState } from "react";

const ExportDataModal = ({ open, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleExport = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      handleClose();
      setIsLoading(false);
    }, 2500);
  };

  return (
    <SimpleDialog
      title="Exportera data"
      open={open}
      onClose={handleClose}
      actions={
        <Button variant="text" onClick={handleClose}>
          Stäng
        </Button>
      }
    >
      <Typography variant="body1">
        Exportera all underliggande data med aktuella filter. Det kan ta en
        stund.
      </Typography>
      <LoadingButton
        fullWidth
        size="large"
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleExport}
        loading={isLoading}
        loadingPosition="start"
        startIcon={<Icon name="FileDownloadOutlined" />}
      >
        {isLoading ? "Exporterar..." : "Exportera .xlsx"}
      </LoadingButton>
    </SimpleDialog>
  );
};

export default ExportDataModal;
