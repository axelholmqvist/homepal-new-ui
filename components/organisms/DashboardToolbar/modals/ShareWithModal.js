import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  Autocomplete,
  Select,
  FormControl,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  List,
  ListSubheader,
  InputAdornment,
  FormControlLabel,
  Collapse,
} from "@mui/material";

import Avatar from "@components/atoms/Avatar";
import Alert from "@components/atoms/Alert";
import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Chip from "@components/atoms/Chip";
import Divider from "@components/atoms/Divider";
import Icon from "@components/atoms/Icon";
import IconButton from "@components/atoms/IconButton";
import MenuItem from "@components/atoms/MenuItem";
import Snackbar from "@components/atoms/Snackbar";
import Stack from "@components/atoms/Stack";
import Switch from "@components/atoms/Switch";
import TextField from "@components/atoms/TextField";
import Tooltip from "@components/atoms/Tooltip";

import AdvancedDialog from "@components/molecules/AdvancedDialog";
import InformationTip from "@components/molecules/InformationTip";

import InviteNewUserModal from "./InviteNewUserModal";

import { users } from "@data/users";

const OWNER_ID = "0";

const ACCESS_MODES = [
  {
    id: "1",
    label: "Bara tillagda användare",
    description: "Privat och delas bara med tillagda användare",
    icon: "LockPersonOutlined",
    color: "action.active",
  },
  {
    id: "2",
    label: "Alla med länken",
    description: "Publik och kan visas av alla som har åtkomst till länken",
    icon: "Public",
    color: "primary",
  },
  {
    id: "3",
    label: "Hela organisationen",
    description: "Tillgänglig och kan visas av alla användare i organisationen",
    icon: "Business",
    color: "secondary",
  },
];

const ShareWithModal = (props) => {
  const [inviteNewUserModalOpen, setInviteNewUserModalOpen] = useState(false);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState(["0", "1", "2"]);
  const [accessMode, setAccessMode] = useState("1");

  const handleClose = () => {
    props.handleClose();
    setSelectedUsers([]);
    setPendingUsers([]);
  };

  const handleAccessModeChange = (event) => {
    setAccessMode(event.target.value);
  };

  const addUser = (email) => {
    setPendingUsers((pendingUsers) => [
      ...pendingUsers,
      {
        id: "9",
        name: null,
        image: null,
        email: email,
      },
    ]);
  };

  return (
    <>
      <AdvancedDialog
        title="Dela dashboard"
        open={props.open}
        onClose={handleClose}
        contentText="Lägg till andra personer för att få åtkomst till denna dashboard."
        actions={
          <Stack direction="row" spacing={1}>
            <Button variant="text" onClick={handleClose}>
              Avbryt
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Spara
            </Button>
          </Stack>
        }
      >
        {/* Access mode */}
        <FormControl
          variant="filled"
          size="small"
          fullWidth
          hiddenLabel
          margin="normal"
        >
          <Select
            value={accessMode}
            onChange={handleAccessModeChange}
            renderValue={(value) => {
              const accessModeObject = ACCESS_MODES.find(
                (accessMode) => accessMode.id === value
              );

              return (
                <MenuItem disableRipple>
                  <ListItemIcon>
                    <Icon
                      name={accessModeObject.icon}
                      color={accessModeObject.color}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={accessModeObject.label}
                    secondary={accessModeObject.description}
                  />
                </MenuItem>
              );
            }}
            MenuProps={{ disableScrollLock: true }}
          >
            {ACCESS_MODES.map((accessMode, i) => (
              <MenuItem value={accessMode.id} key={i}>
                <ListItemIcon>
                  <Icon name={accessMode.icon} color={accessMode.color} />
                </ListItemIcon>
                <ListItemText
                  primary={accessMode.label}
                  secondary={accessMode.description}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Collapse in={accessMode === "2"}>
          <Alert severity="error">
            <strong>Viktigt!</strong> Säkerställ att dashboarden inte innehåller
            någon känslig data innan den görs publik.
          </Alert>
        </Collapse>
        <ShareLink />
        <UserSelect
          setSelectedUsers={setSelectedUsers}
          currentUsers={currentUsers}
        />
        <UserList
          pendingUsers={pendingUsers}
          selectedUsers={selectedUsers}
          currentUsers={currentUsers}
          organisation={accessMode === "3"}
        />
        <Divider sx={{ my: 2 }}>eller</Divider>
        <Button
          onClick={() => {
            setInviteNewUserModalOpen(true);
          }}
          variant="text"
          color="secondary"
          fullWidth
          startIcon={<Icon name="PersonAddAltOutlined" />}
        >
          Lägg till en ny användare via email
        </Button>
      </AdvancedDialog>

      {/* --- MODALS --- */}
      <InviteNewUserModal
        open={inviteNewUserModalOpen}
        handleClose={() => setInviteNewUserModalOpen(false)}
        addUser={addUser}
      />
    </>
  );
};

const ShareLink = (props) => {
  const router = useRouter();

  const [shareURL, setShareURL] = useState(
    "http://localhost:3000" + router.asPath
  );

  const [includeActiveFilters, setIncludeActiveFilters] = useState(false);
  const handleIncludeActiveFiltersChange = (event) => {
    setIncludeActiveFilters(event.target.checked);
  };

  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(shareURL);
    setShowCopiedMessage(true);
  };

  const handleCloseCopiedMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowCopiedMessage(false);
  };

  useEffect(() => {
    if (includeActiveFilters) {
      setShareURL(
        "http://localhost:3000" +
          router.asPath +
          "?region=Öst&realEstates=Storken 2:3&objectType=Lager"
      );
    } else {
      setShareURL("http://localhost:3000" + router.asPath);
    }
  }, [includeActiveFilters, router.asPath]);

  return (
    <>
      <TextField
        value={shareURL}
        fullWidth
        label="Dela länk"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon name="Link" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button
                color="primary"
                variant="text"
                onClick={copyLinkToClipboard}
                startIcon={<Icon name="ContentCopy" />}
              >
                Kopiera
              </Button>
            </InputAdornment>
          ),
          readOnly: true,
        }}
      />

      <FormControlLabel
        value="end"
        control={
          <Switch
            checked={includeActiveFilters}
            onChange={handleIncludeActiveFiltersChange}
          />
        }
        label={
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Box component="span">Inkludera aktiva filter</Box>
            <InformationTip title="Alla de filter som är aktiva i din dashboard kommer inkluderas i den länken som kopieras." />
          </Stack>
        }
        labelPlacement="end"
      />

      {/* --- FEEDBACK --- */}
      <Snackbar
        open={showCopiedMessage}
        autoHideDuration={3000}
        onClose={handleCloseCopiedMessage}
        message="Länken har kopierats till urklipp"
      />
    </>
  );
};

const UserSelect = (props) => {
  const handleChange = (event, value) => {
    props.setSelectedUsers(value);
  };

  const options = users.filter((user) => !props.currentUsers.includes(user.id));

  return (
    <>
      <Autocomplete
        onChange={handleChange}
        multiple
        limitTags={3}
        options={options}
        filterSelectedOptions
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <ListItem alignItems="flex-start" justifyContent="center" {...props}>
            <ListItemAvatar>
              <Avatar alt={option.name} src={option.image} />
            </ListItemAvatar>
            <ListItemText primary={option.name} secondary={option.email} />
          </ListItem>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Lägg till användare"
            placeholder="Sök..."
            margin="normal"
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={index}
              label={option.name}
              avatar={<Avatar alt={option.name} src={option.image} />}
              {...getTagProps({ index })}
            />
          ))
        }
      />
    </>
  );
};

const UserList = (props) => {
  const getUserById = (id) => {
    const user = users.find((user) => user.id === id);
    return user;
  };

  return (
    <List>
      <ListSubheader disableSticky>Rättigheter</ListSubheader>
      <Collapse in={props.organisation}>
        <OrganisationItem pending />
      </Collapse>
      {props.pendingUsers.map((user, i) => (
        <UserItem key={i} user={user} pending />
      ))}
      {props.selectedUsers.map((user, i) => (
        <UserItem key={i} user={user} pending />
      ))}
      {props.currentUsers.map((id, i) => (
        <UserItem key={i} user={getUserById(id)} />
      ))}
    </List>
  );
};

const UserItem = (props) => {
  const [permission, setPermission] = useState("Visa");

  const handleChange = (event) => {
    setPermission(event.target.value);
  };

  return (
    <ListItem
      {...props}
      dense
      divider
      secondaryAction={
        props.user.id === OWNER_ID ? (
          <Tooltip title={`${props.user.name} är ägare av denna dashboard`}>
            <Chip label="Ägare" />
          </Tooltip>
        ) : (
          <Stack direction="row" alignItems="center" spacing={1}>
            {props.pending ? (
              <Chip
                label="Väntar på att bli tillagd"
                size="small"
                color="primary"
              />
            ) : null}
            <FormControl fullWidth size="small" sx={{ width: "15ch" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="Visa"
                value={permission}
                onChange={handleChange}
              >
                <MenuItem value="Visa">Visa</MenuItem>
                <MenuItem value="Redigera">Redigera</MenuItem>
                <MenuItem value="Ägare">Ägare</MenuItem>
              </Select>
            </FormControl>
            <Box>
              <IconButton>
                <Icon name="Clear" fontSize="small" />
              </IconButton>
            </Box>
          </Stack>
        )
      }
    >
      <ListItemAvatar>
        <Avatar alt={props.user.name} src={props.user.image} />
      </ListItemAvatar>
      <ListItemText
        primary={props.user.name ?? props.user.email}
        secondary={props.user.name ? props.user.email : null}
      />
    </ListItem>
  );
};

const OrganisationItem = (props) => {
  const [permission, setPermission] = useState("Visa");

  const handleChange = (event) => {
    setPermission(event.target.value);
  };

  return (
    <ListItem
      divider
      {...props}
      secondaryAction={
        <Stack direction="row" alignItems="center" spacing={1}>
          {props.pending ? (
            <Chip
              label="Väntar på att bli tillagd"
              size="small"
              color="primary"
            />
          ) : null}
          <FormControl fullWidth size="small" sx={{ width: "15ch" }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue="Visa"
              value={permission}
              onChange={handleChange}
            >
              <MenuItem value="Visa">Visa</MenuItem>
              <MenuItem value="Redigera">Redigera</MenuItem>
              <MenuItem value="Ägare">Ägare</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <IconButton>
              <Icon name="Clear" fontSize="small" />
            </IconButton>
          </Box>
        </Stack>
      }
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: "transparent" }}>
          <Icon name="Business" color="secondary" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Hela organisationen"
        primaryTypographyProps={{ variant: "subtitle2" }}
      />
    </ListItem>
  );
};

export default ShareWithModal;
