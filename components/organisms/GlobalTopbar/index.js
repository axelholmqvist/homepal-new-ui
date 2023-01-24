import { AppBar, Box, Breadcrumbs, Chip, Alert, Collapse } from "@mui/material";

import Profile from "@components/organisms/Profile";

import { useTheme } from "@mui/material/styles";
import { profile } from "@data/profile";
import Link from "next/link";

const GlobalTopbar = (props) => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[3],
        }}
      >
        {props.alert}
        <Box sx={{ pl: 4, pr: 2, pt: 2, pb: props.toolbar ? 0 : 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            gap={1}
          >
            {props.breadcrumbs ? (
              <Breadcrumbs aria-label="breadcrumb" maxItems={2}>
                {props.breadcrumbs.map((breadcrumb, i) => (
                  <Link href={breadcrumb.link} passHref key={i}>
                    <Chip
                      label={breadcrumb.title}
                      size="small"
                      clickable
                      sx={{
                        color:
                          i === props.breadcrumbs.length - 1
                            ? null
                            : "text.secondary",
                        fontWeight:
                          i === props.breadcrumbs.length - 1 ? 500 : null,
                      }}
                    />
                  </Link>
                ))}
              </Breadcrumbs>
            ) : null}
            {props.extra}
            <Box sx={{ flexGrow: 1 }} />
            <Profile
              firstName={profile.firstName}
              lastName={profile.lastName}
              email={profile.email}
              src={profile.src}
            />
          </Box>
          {props.toolbar}
        </Box>
      </AppBar>
    </>
  );
};

export default GlobalTopbar;
