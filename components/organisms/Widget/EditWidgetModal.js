import * as React from "react";

import {
  Dialog,
  Slide,
  Box,
  Paper,
  Tabs,
  Tab,
  Divider,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";

import Button from "@components/atoms/Button";

import { useState } from "react";
import { useTheme } from "@mui/material/styles";

import KPIBox from "@components/organisms/Widget/types/KPIBox";
import Icon from "@components/atoms/Icon";
import FullScreenDialog from "@components/molecules/FullScreenDialog";
import ToggleButton from "@components/atoms/ToggleButton";

export default function EditWidgetModal(props) {
  const theme = useTheme();
  return (
    <FullScreenDialog
      open={props.open}
      onClose={props.handleClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: "100%",
          height: "100%",
        },
      }}
      title="Redigera widget"
      actions={
        <>
          <Button variant="text" onClick={props.handleClose}>
            Avbryt
          </Button>
          <Button variant="contained" onClick={props.handleClose}>
            Spara
          </Button>
        </>
      }
    >
      <Box
        sx={{
          height: "100%",
          gap: 2,
          p: 2,
          bgcolor: "grey.100",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SideMenu />
        <KPIBox
          title="Ej påbörjade arbetsordrar"
          value="198"
          unit="st"
          comparedValue={2}
        />
      </Box>
    </FullScreenDialog>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SideMenu(props) {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, tabValue) => {
    setTab(tabValue);
  };

  const [mode, setMode] = useState(0);

  const handleModeChange = (event, modeValue) => {
    setMode(modeValue);
  };

  const modes = [
    { title: "1", value: "1" },
    { title: "2", value: "2" },
  ];

  return (
    <Paper sx={{ width: "300px", flexShrink: 0 }}>
      <Tabs
        value={tab}
        onChange={handleTabChange}
        aria-label="basic tabs example"
        centered
        variant="fullWidth"
      >
        <Tooltip title="Data" arrow>
          <Tab icon={<Icon name="TuneOutlined" />} aria-label="Data" />
        </Tooltip>
        <Tooltip title="Filter" arrow>
          <Tab icon={<Icon name="FilterAltOutlined" />} aria-label="Filter" />
        </Tooltip>
        <Tooltip title="Inställningar" arrow>
          <Tab
            icon={<Icon name="PaletteOutlined" />}
            aria-label="Inställningar"
          />
        </Tooltip>
      </Tabs>
      <Divider />
      <Box sx={{ p: 2 }}>
        <ToggleButton items={modes} onChange={handleModeChange} value={mode} />
      </Box>
    </Paper>
  );
}
