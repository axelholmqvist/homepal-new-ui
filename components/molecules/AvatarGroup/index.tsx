import React, { ElementType, MouseEvent, ReactNode } from "react";

import { useState } from "react";

import { Popper } from "@mui/material";
import { AvatarGroup as MUIAvatarGroup } from "@mui/material";

import Avatar from "@components/atoms/Avatar";
import Paper from "@components/atoms/Paper";
import Stack from "@components/atoms/Stack";
import Tooltip from "@components/atoms/Tooltip";
import Typography from "@components/atoms/Typography";

const MAX_USERS = 4;

interface AvatarGroupProps {
  component?: ElementType<any>;
  max?: number;
  spacing?: "medium" | "small" | number;
  sx?: object;
  users: { name: string; src: string }[];
}

const AvatarGroup = React.forwardRef((props: AvatarGroupProps, ref: any) => {
  const { users, ...rest } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleLeave = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MUIAvatarGroup
        {...rest}
        ref={ref}
        total={props.users.length}
        slotProps={{
          additionalAvatar: {
            onMouseEnter: (event: MouseEvent<HTMLElement>) => {
              setAnchorEl(event.currentTarget);
            },
            onMouseLeave: handleLeave,
          },
        }}
      >
        {props.users.map((user, i) => (
          <Tooltip title={user.name} arrow key={i}>
            <Avatar alt={user.name} src={user.src} />
          </Tooltip>
        ))}
      </MUIAvatarGroup>

      <Popper
        open={open}
        anchorEl={anchorEl}
        onMouseLeave={handleLeave}
        sx={{ zIndex: 1500 }}
      >
        <Paper sx={{ p: 1, mt: "14px", bgcolor: "background.tooltip" }}>
          <Stack spacing={1}>
            {props.users
              .slice(MAX_USERS - 1, props.users.length)
              .map((user, i) => (
                <Stack
                  direction="row"
                  spacing={1}
                  key={i}
                  sx={{ alignItems: "center" }}
                >
                  <Avatar
                    alt={user.name}
                    src={user.src}
                    sx={{
                      width: 24,
                      height: 24,
                      fontSize: 13,
                      bgcolor: "primary.main",
                      mr: 1,
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "0.6875rem",
                    }}
                  >
                    {user.name}
                  </Typography>
                </Stack>
              ))}
          </Stack>
        </Paper>
      </Popper>
    </>
  );
});

AvatarGroup.defaultProps = {
  max: MAX_USERS,
  sx: {
    "& .MuiAvatar-root": {
      width: 24,
      height: 24,
      fontSize: 13,
      bgcolor: "primary.main",
    },
    "& :first-of-type": {
      bgcolor: "grey.400",
    },
  },
};

AvatarGroup.displayName = "AvatarGroup";
export default AvatarGroup;
