import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Drawer, Collapse } from "@mui/material";
import LogotypeIcon from "@assets/logotypes/LogotypeIcon";

import Icon from "@components/atoms/Icon";
import Stack from "@components/atoms/Stack";
import Box from "@components/atoms/Box";
import Divider from "@components/atoms/Divider";
import Typography from "@components/atoms/Typography";
import IconButton from "@components/atoms/IconButton";
import Tooltip from "@components/atoms/Tooltip";

import NavigationItem from "@components/molecules/NavigationItem";

import { useTheme } from "@mui/material/styles";

const productItems = [
  {
    href: "/insight-studio",
    icon: <Icon name="WidgetsTwoTone" fontSize="small" />,
    title: "Insight Studio",
    subItems: [
      {
        href: "/insight-studio/dashboards",
        icon: <Icon name="DynamicFeedTwoTone" fontSize="small" />,
        title: "Dashboards",
      },
      {
        href: "/insight-studio/library",
        icon: <Icon name="MenuBookTwoTone" fontSize="small" />,
        title: "Bibliotek",
      },
    ],
  },
  {
    href: "/access-hub",
    icon: <Icon name="ApiTwoTone" fontSize="small" />,
    title: "Access Hub",
    subItems: [
      {
        href: "/access-hub/api",
        icon: <Icon name="HubTwoTone" fontSize="small" />,
        title: "API",
      },
    ],
  },
];

const otherItems = [
  {
    href: "/core",
    icon: <Icon name="StorageTwoTone" fontSize="small" />,
    title: "Core",
    subItems: [
      {
        href: "/core1",
        icon: <Icon name="LanTwoTone" fontSize="small" />,
        title: "Modeller",
      },
      {
        href: "/core2",
        icon: <Icon name="TableViewTwoTone" fontSize="small" />,
        title: "Manuell data",
        hidden: true,
      },
      {
        href: "/core3",
        icon: <Icon name="PowerTwoTone" fontSize="small" />,
        title: "Ansluten data",
        hidden: true,
      },
    ],
  },
  {
    href: "/admin",
    icon: <Icon name="AdminPanelSettingsTwoTone" fontSize="small" />,
    title: "Admin",
  },
];

const GlobalSidebar = (props) => {
  const router = useRouter();
  const theme = useTheme();

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarWidth, setsidebarWidth] = useState(280);

  useEffect(() => {
    isSidebarOpen ? setsidebarWidth(280) : setsidebarWidth(64);
  }, [isSidebarOpen]);

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ pt: 2, pb: 1, px: 1 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Box sx={{ height: "48px", width: "48px" }}>
              <LogotypeIcon />
            </Box>
            {isSidebarOpen ? (
              <Collapse in={isSidebarOpen} orientation="horizontal">
                <Typography variant="h5" noWrap>
                  Homepal
                </Typography>
              </Collapse>
            ) : null}
          </Stack>
        </Box>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 1,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {productItems.map((item) => (
            <NavigationItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
              subItems={item.subItems}
              collapsed={isSidebarOpen}
            />
          ))}
        </Box>
        <Box>
          {otherItems.map((item) => (
            <NavigationItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
              subItems={item.subItems}
              collapsed={isSidebarOpen}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  return (
    <Drawer
      anchor="left"
      open
      variant="persistent"
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
      PaperProps={{
        sx: {
          width: sidebarWidth,
          backgroundColor: "black.main",
          color: "white.main",
          borderRightColor: "grey.600",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.leavingScreen,
          }),
          overflowY: "visible",
          zIndex: 1200,
        },
      }}
    >
      <Tooltip
        title={isSidebarOpen ? "Stäng sidomenyn" : "Öppna sidomenyn"}
        arrow
        placement="right"
      >
        <IconButton
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          variant="contained"
          sx={{
            position: "absolute",
            right: -12,
            top: 6,
            zIndex: 1201,
            width: "24px",
            height: "24px",
            fontSize: "12px",
            bgcolor: "black.main",
            color: "grey.600",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "grey.600",
            "&:hover": {
              bgcolor: "grey.900",
              color: "white.main",
            },
          }}
        >
          <Icon name={isSidebarOpen ? "ChevronLeft" : "ChevronRight"} />
        </IconButton>
      </Tooltip>
      {content}
    </Drawer>
  );
};

export default GlobalSidebar;
