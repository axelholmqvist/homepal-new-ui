import Head from "next/head";
import { Box, Typography, Toolbar } from "@mui/material";

import GlobalTopbar from "@components/organisms/GlobalTopbar";

export default function Page() {
  return (
    <>
      <Head>
        <title>Notifikationer | Homepal</title>
      </Head>
      <GlobalTopbar
        title="Notifikationer"
        breadcrumbs={["Insight Studio", "Notifikationer"]}
      />
      <Box
        component="main"
        sx={{
          p: 2,
        }}
      >
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
          <Typography variant="h6" component="div">
            Content
          </Typography>
        </Toolbar>
      </Box>
    </>
  );
}
