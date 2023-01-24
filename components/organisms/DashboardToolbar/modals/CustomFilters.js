import {
  FormControl,
  Menu,
  ListItem,
  Autocomplete,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";

import Badge from "@components/atoms/Badge";
import Backdrop from "@components/atoms/Backdrop";
import Button from "@components/atoms/Button";
import Box from "@components/atoms/Box";
import Chip from "@components/atoms/Chip";
import Divider from "@components/atoms/Divider";
import Fab from "@components/atoms/Fab";
import Icon from "@components/atoms/Icon";
import IconButton from "@components/atoms/IconButton";
import TextField from "@components/atoms/TextField";
import Tooltip from "@components/atoms/Tooltip";
import Typography from "@components/atoms/Typography";
import Stack from "@components/atoms/Stack";
import MenuItem from "@components/atoms/MenuItem";

import { useState, useRef } from "react";

const FILTERS = [
  {
    id: "administrative_area",
    title: "Förvaltningsområde",
    options: ["Centralt", "Öst", "Norr", "Syd", "Väst"],
  },
  {
    id: "real_estate_name",
    title: "Fastighet",
    options: [
      "Strandstråket 1:2",
      "Storken 2:3",
      "Stoftet 4:2",
      "Stenhuggaren 2:1",
      "Spjutet 3:1",
      "Smörlyckan 2:1",
      "Smultronet 33:2",
      "Skepparen 1:2",
    ],
  },
  {
    id: "object_type",
    title: "Objekttyp",
    options: ["Kontor", "Lager", "Lägenheter", "Seniorboende", "Studentboende"],
  },
];

const SAVED_FILTERS = [
  "Lägenheter, Öst (utan Storken 2:3)",
  "Seniorboende, Öst (utan Storken 2:3)",
  "Studentboende, Öst (utan Storken 2:3)",
];

export default function CustomFilters() {
  const ref = useRef();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClick = () => {
    setAnchorEl(ref.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip label="Öst" onClick={handleClick} />
        <Chip label="Storken 2:3" onClick={handleClick} />
        <Chip label="Lager" onClick={handleClick} />
      </Stack>
      <Tooltip title="Filtrera" arrow>
        <Fab
          onClick={handleClick}
          color="primary"
          ref={ref}
          sx={{ position: "fixed", right: 24, bottom: 24 }}
        >
          <Badge color="secondary" variant="dot" invisible={!isActive}>
            <Icon name="TuneOutlined" />
          </Badge>
        </Fab>
      </Tooltip>
      <FilterMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
    </>
  );
}

function FilterMenu(props) {
  return (
    <>
      <Backdrop open={props.open} onClick={props.handleClose} />
      <Menu
        id="tab-options-button"
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        arrow
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        disableScrollLock
        PaperProps={{
          sx: {
            mt: -1,
          },
        }}
      >
        <ListItem>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" sx={{ lineHeight: null }}>
              Filtrera
            </Typography>
            <Stack direction="row">
              <Button variant="text" color="secondary">
                Rensa allt
              </Button>
              <Button variant="text" color="secondary">
                Spara filter
              </Button>
            </Stack>
          </Stack>
        </ListItem>
        <Divider />
        <Box sx={{ my: 2 }}>
          {FILTERS.map((filter, i) => (
            <FilterMenuItem filter={filter} key={i} />
          ))}
        </Box>
        <Divider />
        <Box sx={{ my: 2 }}>
          <ListItem>
            <SavedFilters />
          </ListItem>
        </Box>
        <Divider />
        <ListItem>
          <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
            <Button fullWidth variant="outlined" onClick={props.handleClose}>
              Stäng
            </Button>
            <Button fullWidth variant="contained" onClick={props.handleClose}>
              Applicera
            </Button>
          </Stack>
        </ListItem>
      </Menu>
    </>
  );
}

function FilterMenuItem(props) {
  return (
    <ListItem>
      <Autocomplete
        multiple
        limitTags={3}
        id="tags-outlined"
        options={props.filter.options}
        getOptionLabel={(option) => option}
        defaultValue={[props.filter.options[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.filter.title}
            placeholder="Sök..."
            margin="small"
          />
        )}
        size="small"
        sx={{ width: 300 }}
      />
    </ListItem>
  );
}

function SavedFilters(props) {
  const [savedFilter, setSavedFilter] = useState("");
  const handleChange = (event) => {
    setSavedFilter(event.target.value);
  };

  return (
    <FormControl fullWidth size="small">
      <TextField
        value={savedFilter}
        select
        label="Mina filter"
        onChange={handleChange}
        size="small"
        SelectProps={{
          renderValue: (p) => p,
        }}
      >
        {SAVED_FILTERS.map((filter, i) => (
          <MenuItem value={filter} key={i}>
            <ListItemText primary={filter} />
            <ListItemSecondaryAction>
              <IconButton edge="end" size="small" aria-label="comments">
                <Icon name="DeleteOutlined" />
              </IconButton>
            </ListItemSecondaryAction>
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
}
