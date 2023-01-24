import { ReactNode } from "react";

import Logotype from "@assets/logotypes/Logotype";

import Box from "@components/atoms/Box";
import Chip from "@components/atoms/Chip";
import Paper from "@components/atoms/Paper";
import Typography from "@components/atoms/Typography";
import Stack from "@components/atoms/Stack";

import LoadingSpinner from "@components/molecules/LoadingSpinner";
import OptionsMenu from "@components/molecules/OptionsMenu";
import OverflowTip from "@components/molecules/OverflowTip";

import EditWidgetModal from "./EditWidgetModal";
import EmbedWidgetModal from "./EmbedWidgetModal";
import DeleteWidgetModal from "./DeleteWidgetModal";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

interface WidgetProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  embedded?: boolean;
  edit?: boolean;
}

const Widget = (props: WidgetProps) => {
  const [loading, setLoading] = useState(true);

  const [editWidgetModalOpen, setEditWidgetModalOpen] = useState(false);
  const [deleteWidgetModalOpen, setDeleteWidgetModalOpen] = useState(false);
  const [embedWidgetModalOpen, setEmbedWidgetModalOpen] = useState(false);

  const router = useRouter();

  const random = Math.floor(Math.random() * 8 - 2) + 2;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500 * random);
  });

  const editMode = useSelector((state: any) => state.editMode.value);

  return (
    <>
      <Paper
        sx={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          p: 2,
          cursor: props.edit && editMode ? "grab" : null,
        }}
      >
        <Box
          sx={{
            pb: 1,
            display: "block",
            width: "100%",
          }}
        >
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ justifyContent: "space-between" }}
          >
            <OverflowTip title={props.title}>
              <Typography gutterBottom variant="h6" component="span">
                {props.title}
              </Typography>
            </OverflowTip>
            {props.edit && editMode ? (
              <Box sx={{ flexGrow: 0 }}>
                <OptionsMenu
                  tooltip="Åtgärder"
                  options={[
                    {
                      title: "Redigera",
                      icon: "EditOutlined",
                      onClick: () => setEditWidgetModalOpen(true),
                      divider: false,
                    },
                    {
                      title: "Bädda in",
                      icon: "CodeOutlined",
                      onClick: () => setEmbedWidgetModalOpen(true),
                      divider: true,
                    },
                    {
                      title: "Radera",
                      icon: "DeleteOutlined",
                      onClick: () => setDeleteWidgetModalOpen(true),
                      divider: false,
                    },
                  ]}
                />
              </Box>
            ) : null}
            {props.embedded ? (
              <Chip
                label={
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center", gap: 0.5 }}
                  >
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ lineHeight: 1 }}
                    >
                      Powered by
                    </Typography>
                    <Box sx={{ height: "20px" }}>
                      <Logotype />
                    </Box>
                  </Stack>
                }
                clickable={true}
                onClick={() => router.push("https://portal.homepal.se/login")}
                color="black"
              />
            ) : null}
          </Stack>
          {props.subtitle ? (
            <OverflowTip title={props.subtitle}>
              <Typography
                variant="body1"
                component="span"
                color="text.secondary"
              >
                {props.subtitle}
              </Typography>
            </OverflowTip>
          ) : null}
        </Box>
        <Box sx={{ flex: "1 1 1px", overflow: "hidden" }}>
          {loading ? (
            <LoadingSpinner
              title="Synkar data från dina system..."
              loading={loading}
            />
          ) : (
            props.children
          )}
        </Box>
      </Paper>

      {/* --- Modals --- */}
      <EmbedWidgetModal
        open={embedWidgetModalOpen}
        handleClose={() => setEmbedWidgetModalOpen(false)}
      />

      <EditWidgetModal
        open={editWidgetModalOpen}
        handleClose={() => setEditWidgetModalOpen(false)}
      />

      <DeleteWidgetModal
        open={deleteWidgetModalOpen}
        handleClose={() => setDeleteWidgetModalOpen(false)}
      />
    </>
  );
};

export default Widget;
