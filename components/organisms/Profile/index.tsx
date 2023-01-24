import { useState } from "react";

import { Menu, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import Avatar from "@components/atoms/Avatar";
import Divider from "@components/atoms/Divider";
import Icon from "@components/atoms/Icon";
import IconButton from "@components/atoms/IconButton";
import MenuItem from "@components/atoms/MenuItem";
import Tooltip from "@components/atoms/Tooltip";

import EditProfileModal from "./EditProfileModal";

import { useRouter } from "next/router";

interface ProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  src: string;
}

const Profile = (props: ProfileProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip
        title={
          <>
            {props.firstName} {props.lastName}
            <br />
            {props.email}
          </>
        }
        arrow
      >
        <IconButton>
          <Avatar
            sx={{ width: 24, height: 24 }}
            alt={`${props.firstName} ${props.lastName}`}
            src={props.src}
            onClick={handleClick}
          />
        </IconButton>
      </Tooltip>

      <OptionsMenu
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
        firstName={props.firstName}
        lastName={props.lastName}
        email={props.email}
        image={props.src}
      />
    </>
  );
};

const OptionsMenu = (props: any) => {
  const router = useRouter();

  const [editProfileModalOpen, setEditProfileModalOpen] = useState(false);

  return (
    <>
      <Menu
        id="tab-options-button"
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <ListItem
          sx={{
            "& .MuiListItemIcon-root": {
              minWidth: 0,
              marginRight: 2,
            },
          }}
        >
          <ListItemIcon>
            <Avatar
              sx={{ width: 40, height: 40 }}
              alt={`${props.firstName} ${props.lastName}`}
              src={props.image}
              onClick={props.handleClick}
            />
          </ListItemIcon>
          <ListItemText
            primary={`${props.firstName} ${props.lastName}`}
            secondary={props.email}
          />
        </ListItem>
        <Divider />
        <MenuItem
          onClick={() => {
            setEditProfileModalOpen(true);
            props.handleClose();
          }}
        >
          <ListItemIcon>
            <Icon name="EditOutlined" fontSize="small" />
          </ListItemIcon>
          <ListItemText>Redigera profil</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/login");
            props.handleClose();
          }}
        >
          <ListItemIcon>
            <Icon name="LogoutOutlined" fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logga ut</ListItemText>
        </MenuItem>
      </Menu>

      {/* --- Modals --- */}
      <EditProfileModal
        open={editProfileModalOpen}
        handleClose={() => setEditProfileModalOpen(false)}
      />
    </>
  );
};

export default Profile;
