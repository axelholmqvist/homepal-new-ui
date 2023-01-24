import Head from "next/head";

import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";

import ExpandableMenu from "@components/molecules/ExpandableMenu";

export default function Page() {
  return (
    <>
      <Head>
        <title>Portal | Homepal</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <ExpandableMenu
          options={[
            {
              label: "ID",
              options: [
                {
                  label: "Antal värden",
                  options: [
                    {
                      label: "Aktuell period",
                      options: null,
                    },
                    {
                      label: "Föregående period",
                      options: null,
                    },
                  ],
                },
                {
                  label: "Antal unika värden",
                  options: [
                    {
                      label: "Aktuell period",
                      options: null,
                    },
                    {
                      label: "Föregående period",
                      options: null,
                    },
                  ],
                },
              ],
            },
            {
              label: "Fastighet",
              options: null,
            },
            {
              label: "Byggnad",
              options: null,
            },
          ]}
        />
        <Button>ExpandableMenu</Button>
      </Box>
    </>
  );
}
