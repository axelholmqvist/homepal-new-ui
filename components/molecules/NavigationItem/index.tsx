import React, { ReactElement } from "react";

import { useRouter } from "next/router";

import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";

import Box from "@components/atoms/Box";
import IconButton from "@components/atoms/IconButton";
import Tooltip from "@components/atoms/Tooltip";
import Chip from "@components/atoms/Chip";
import Icon from "@components/atoms/Icon";

interface NavigationItemProps {
  collapsed: boolean;
  hidden?: boolean;
  href: string;
  icon: ReactElement;
  isSubItem: boolean;
  subItems:
    | { href: string; icon: ReactElement; title: string; hidden: boolean }[]
    | false;
  title: string;
}

const NavigationItem = React.forwardRef(
  (props: NavigationItemProps, ref: any) => {
    const router = useRouter();
    const active = router.pathname.includes(props.href);
    const current = router.pathname === props.href;

    const handleClick = () => {
      router.push(props.href);
    };

    return (
      <>
        {props.collapsed ? (
          <ListItemButton
            ref={ref}
            onClick={handleClick}
            disableRipple
            sx={{
              py: 0,
              minHeight: 48,
              color: active ? "primary.main" : "grey.600",
              "& .MuiListItemIcon-root": {
                minWidth: 0,
                marginRight: 2,
                marginLeft: "8px",
              },
              "& .MuiListItemText-root": {
                marginLeft: props.isSubItem ? "20px" : null,
              },
              "&:hover": {
                color: !current ? "white.main" : null,
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>{props.icon}</ListItemIcon>
            <ListItemText
              primary={props.title}
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: "medium",
                noWrap: true,
              }}
            />
            {props.hidden ? (
              <ListItemSecondaryAction>
                <Tooltip title="Bara Homepal kan se detta">
                  <Icon
                    name="VisibilityOffTwoTone"
                    fontSize="small"
                    color="secondary"
                  />
                </Tooltip>
              </ListItemSecondaryAction>
            ) : null}
          </ListItemButton>
        ) : (
          <Tooltip title={props.title} arrow placement="right">
            <Box
              ref={ref}
              sx={{
                width: "64px",
                height: "48px",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                component="a"
                disableRipple
                sx={{
                  backgroundColor: current && "rgba(255,255,255, 0.08)",
                  color: active ? "primary.main" : "grey.600",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255, 0.08)",
                  },
                }}
              >
                {props.icon}
              </IconButton>
            </Box>
          </Tooltip>
        )}
        {props.subItems && (
          <Collapse in={active} timeout="auto" unmountOnExit>
            <Box sx={{ py: 1, bgcolor: "transparent.white" }}>
              {props.subItems.map((subItem) => (
                <NavigationItem
                  key={subItem.title}
                  href={subItem.href}
                  icon={subItem.icon}
                  title={subItem.title}
                  isSubItem={true}
                  collapsed={props.collapsed}
                  subItems={false}
                  hidden={subItem.hidden}
                />
              ))}
            </Box>
          </Collapse>
        )}
      </>
    );
  }
);

NavigationItem.displayName = "NavigationItem";
export default NavigationItem;
