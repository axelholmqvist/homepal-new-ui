import Head from "next/head";
import { Grid } from "@mui/material";

import Box from "@components/atoms/Box";
import Stack from "@components/atoms/Stack";
import Typography from "@components/atoms/Typography";

import AvatarGroup from "@components/molecules/AvatarGroup";
import OverflowTip from "@components/molecules/OverflowTip";
import Section from "@components/molecules/Section";

import DashboardThumbnail from "@components/organisms/DashboardThumbnail";
import GlobalTopbar from "@components/organisms/GlobalTopbar";
import WelcomeHero from "@components/organisms/WelcomeHero";

import { dashboards } from "@data/dashboards";
import { users } from "@data/users";
import { profile } from "@data/profile";

export default function Page() {
  return (
    <>
      <Head>
        <title>Insight Studio | Homepal</title>
      </Head>
      <GlobalTopbar
        title="Analys av arbetsorderkategorier"
        breadcrumbs={[{ title: "Insight Studio", link: "/insight-studio" }]}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <WelcomeHero name={profile.firstName} />
          </Grid>
          <Grid item xs={12}>
            <Section title="Nyligen besökta">
              <Grid container spacing={2}>
                {dashboards.slice(0, 4).map((dashboard, i) => (
                  <Grid item lg={3} sm={6} xl={3} xs={12} key={i}>
                    <DashboardThumbnail
                      title={dashboard.title}
                      type={dashboard.type}
                      link={`/insight-studio/dashboards/${dashboard.id}`}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{ mt: 0.5, justifyContent: "space-between" }}
                      >
                        <OverflowTip title={`Besöktes ${dashboard.visitedAt}`}>
                          <Typography
                            variant="body2"
                            component="span"
                            color="text.secondary"
                          >
                            Besöktes {dashboard.visitedAt}
                          </Typography>
                        </OverflowTip>
                        <AvatarGroup users={users} />
                      </Stack>
                    </DashboardThumbnail>
                  </Grid>
                ))}
              </Grid>
            </Section>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
