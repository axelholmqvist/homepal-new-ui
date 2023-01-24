import * as React from "react";
import { useState } from "react";

import Box from "@components/atoms/Box";
import Divider from "@components/atoms/Divider";
import Icon from "@components/atoms/Icon";
import IconButton from "@components/atoms/IconButton";
import Tooltip from "@components/atoms/Tooltip";

import OptionsMenu from "@components/molecules/OptionsMenu";

import TabMenu from "./TabMenu";

import ShowDetailsModal from "./modals/ShowDetailsModal";
import EditTitleModal from "./modals/EditTitleModal";
import ShowDataModal from "./modals/ShowDataModal";
import ExportDataModal from "./modals/ExportDataModal";
import ShareWithModal from "./modals/ShareWithModal";
import PeriodFilter from "./modals/PeriodFilter";
import CustomFilters from "./modals/CustomFilters";
import DeleteDashboardModal from "./modals/DeleteDashboardModal";

import { toggle } from "@slices/editModeSlice";
import { useSelector, useDispatch } from "react-redux";

const DashboardToolbar = (props) => {
  const editMode = useSelector((state) => state.editMode.value);
  const dispatch = useDispatch();

  const [showDetailsModalOpen, setShowDetailsModalOpen] = useState(false);
  const [editTitleModalOpen, setEditTitleModalOpen] = useState(false);
  const [exportDataModalOpen, setExportDataModalOpen] = useState(false);
  const [showDataModalOpen, setShowDataModalOpen] = useState(false);
  const [shareWithModalOpen, setShareWithModalOpen] = useState(false);
  const [deleteDashboardModalOpen, setDeleteDashboardModalOpen] =
    useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexBasis: {
              lg: "25%",
              xs: "50%",
            },
            maxWidth: "75%",
          }}
        >
          <TabMenu />
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ mx: 1 }}
          />
          {editMode ? (
            <>
              <Tooltip title="Lägg till sida">
                <IconButton>
                  <Icon
                    name="AddOutlined"
                    fontSize="small"
                    color="action.disabled"
                  />
                </IconButton>
              </Tooltip>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ mx: 1 }}
              />
            </>
          ) : null}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexBasis: "50%",
          }}
        >
          <PeriodFilter />
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ mx: 1 }}
          />
          <CustomFilters />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            flexBasis: {
              lg: "25%",
              xs: "50%",
            },
          }}
        >
          {editMode ? (
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ mx: 1 }}
            />
          ) : null}
          <Tooltip title="Dela" arrow>
            <IconButton
              onClick={() => {
                setShareWithModalOpen(true);
              }}
            >
              <Icon name="ShareOutlined" />
            </IconButton>
          </Tooltip>
          <OptionsMenu
            tooltip="Fler åtgärder"
            options={[
              {
                title: "Redigera",
                icon: "PaletteOutlined",
                onClick: () => dispatch(toggle()),
              },
              {
                title: "Byt namn",
                icon: "EditOutlined",
                onClick: () => setEditTitleModalOpen(true),
                divider: true,
              },
              {
                title: "Exportera data",
                icon: "FileDownloadOutlined",
                onClick: () => setExportDataModalOpen(true),
              },
              {
                title: "Visa data",
                icon: "TableViewOutlined",
                onClick: () => setShowDataModalOpen(true),
                divider: true,
              },
              {
                title: "Visa detaljer",
                icon: "InfoOutlined",
                onClick: () => setShowDetailsModalOpen(true),
                divider: true,
              },
              {
                title: "Radera",
                icon: "DeleteOutlined",
                onClick: () => setDeleteDashboardModalOpen(true),
              },
            ]}
          />
        </Box>
      </Box>

      {/* --- Modals --- */}
      <ShowDetailsModal
        open={showDetailsModalOpen}
        handleClose={() => setShowDetailsModalOpen(false)}
      />

      <EditTitleModal
        open={editTitleModalOpen}
        handleClose={() => setEditTitleModalOpen(false)}
      />

      <ExportDataModal
        open={exportDataModalOpen}
        handleClose={() => setExportDataModalOpen(false)}
      />

      <ShowDataModal
        open={showDataModalOpen}
        handleClose={() => setShowDataModalOpen(false)}
      />

      <ShareWithModal
        open={shareWithModalOpen}
        handleClose={() => setShareWithModalOpen(false)}
      />

      <DeleteDashboardModal
        open={deleteDashboardModalOpen}
        handleClose={() => setDeleteDashboardModalOpen(false)}
      />
    </>
  );
};

export default DashboardToolbar;
