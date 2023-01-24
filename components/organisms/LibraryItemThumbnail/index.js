import { useState } from "react";

import Chip from "@components/atoms/Chip";
import Icon from "@components/atoms/Icon";
import Tooltip from "@components/atoms/Tooltip";
import Typography from "@components/atoms/Typography";
import DashboardThumbnail from "@components/organisms/DashboardThumbnail";

import MissingDataModal from "./MissingDataModal";
import ActivateDashboardModal from "./ActivateDashboardModal";

const LibraryItemThumbnail = (props) => {
  const [missingDataModalOpen, setMissingDataModalOpen] = useState(false);
  const [activateDashboardModalOpen, setActivateDashboardModalOpen] =
    useState(false);

  const colors = ["primary", "secondary", "tertiary"];

  return (
    <>
      <DashboardThumbnail
        title={props.dashboard.title}
        type={props.dashboard.type}
        disabled={props.dashboard.disabled}
        mediaContent={
          <Tooltip title="Klicka för mer information" arrow>
            <Chip
              label="Data saknas"
              color="info"
              icon={<Icon name="Info" />}
              clickable
              onClick={() => setMissingDataModalOpen(true)}
            />
          </Tooltip>
        }
        onClick={() => setActivateDashboardModalOpen(true)}
      >
        <Typography variant="body2" color="text.secondary">
          Fastighetschef • VD
        </Typography>
      </DashboardThumbnail>

      {/* --- Modals --- */}
      <MissingDataModal
        open={missingDataModalOpen}
        handleClose={() => setMissingDataModalOpen(false)}
      />
      <ActivateDashboardModal
        open={activateDashboardModalOpen}
        handleClose={() => setActivateDashboardModalOpen(false)}
        dashboard={props.dashboard}
      />
    </>
  );
};

export default LibraryItemThumbnail;
