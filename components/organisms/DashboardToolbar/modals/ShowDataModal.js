import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import Alert from "@components/atoms/Alert";
import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";

import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "@data/underlyingData";
import FullScreenDialog from "@components/molecules/FullScreenDialog";

const ShowDataModal = ({ open, handleClose }) => {
  return (
    <FullScreenDialog
      open={open}
      onClose={handleClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: "100%",
          height: "100%",
        },
      }}
      title="Visa data"
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Alert severity="info">
          <b>Synkad 2023-01-02 kl. 15:02.</b> Nedan är en förhandsvisning av de
          100 första raderna.
        </Alert>
        <Box sx={{ flexGrow: 1 }}>
          <DataTable />
        </Box>
      </Box>
    </FullScreenDialog>
  );
};

function DataTable() {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
}

export default ShowDataModal;
