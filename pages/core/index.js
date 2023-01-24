import Head from "next/head";
import { Box } from "@mui/material";

export default function Page() {
  return (
    <>
      <Head>
        <title>Admin | Homepal</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      ></Box>
    </>
  );
}
