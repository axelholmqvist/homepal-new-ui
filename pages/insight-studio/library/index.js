import Head from "next/head";
import { Grid, Box, Typography, Paper } from "@mui/material";

import Button from "@components/atoms/Button";

import GlobalTopbar from "@components/organisms/GlobalTopbar";
import LibraryItemThumbnail from "@components/organisms/LibraryItemThumbnail";

import { dashboards } from "@data/dashboards";

export default function Page() {
  return (
    <>
      <Head>
        <title>Bibliotek | Homepal</title>
      </Head>
      <GlobalTopbar
        title="Bibliotek"
        breadcrumbs={[
          { title: "Insight Studio", link: "/insight-studio" },
          { title: "Bibliotek", link: "/insight-studio/library" },
        ]}
      />
      <Box
        component="main"
        sx={{
          p: 2,
        }}
      >
        <Grid container spacing={2}>
          {dashboards.map((dashboard, i) => (
            <Grid item lg={3} sm={6} xl={3} xs={12} key={i}>
              <LibraryItemThumbnail dashboard={dashboard} />
            </Grid>
          ))}
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Paper
              variant="outlined"
              sx={{
                p: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography gutterBottom variant="h6" component="div">
                Saknar du något?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vi arbetar ständigt med att utöka vårt bibliotek av färdiga
                dashboards för alla områden.
              </Typography>
              <Button>Kontakta oss</Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
