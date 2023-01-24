import KPIBox from "@components/organisms/Widget/types/KPIBox";
import Icon from "@components/atoms/Icon";

import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Switch,
  FormGroup,
  FormControlLabel,
  Tooltip,
  Collapse,
} from "@mui/material";
import { useState } from "react";

import Button from "@components/atoms/Button";

export default function EmbedWidgetModal({ open, handleClose }) {
  const iframe = `<iframe width="512" height="256" src="https://homepal.se/embed/c13cfc5a-5b85-46e9-bf03-a132f43413e2" title="Homepal Widget" frameborder="0"></iframe>`;

  const [activated, setActivated] = useState(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box sx={{ p: 2, bgcolor: "action.active" }}>
        <Box sx={{ width: "512px", height: "256px" }}>
          <KPIBox
            title="Ej påbörjade arbetsordrar"
            value="198"
            unit="st"
            comparedValue={2}
            edit={false}
            embedded={true}
          />
        </Box>
      </Box>
      <DialogTitle id="alert-dialog-title">Bädda in widget</DialogTitle>
      <DialogContent>
        <FormGroup>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={<Switch />}
              label={"Aktivera inbäddning."}
              checked={activated}
              onChange={() => setActivated(!activated)}
              sx={{ mr: "8px" }}
            />
            <Tooltip
              title="Tänk på att när du aktiverar inbäddning av en widget så får alla med tillgång till länken också tillgång till det din widget visar."
              arrow
            >
              <Box component="span">
                <Icon
                  name="InfoOutlined"
                  fontSize="small"
                  sx={{ my: "auto" }}
                />
              </Box>
            </Tooltip>
          </Box>
          <Collapse in={activated}>
            <Box sx={{ mt: 1 }}>
              <TextField
                multiline
                rows={5}
                defaultValue={iframe}
                fullWidth
                onFocus={(e) => e.target.select()}
              />
            </Box>
          </Collapse>
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleClose}>
          Avbryt
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Spara
        </Button>
      </DialogActions>
    </Dialog>
  );
}
