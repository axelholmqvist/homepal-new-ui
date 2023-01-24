import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Chip from "@mui/material";
import Typography from "@components/atoms/Typography";
import Stack from "@components/atoms/Stack";

import AdvancedDialog from "@components/molecules/AdvancedDialog";

const ActivateDashboardModal = (props) => {
  const colors = ["secondary", "tertiary", "quaternary", "quinary"];
  const random = Math.floor(Math.random() * colors.length);

  return (
    <AdvancedDialog
      open={props.open}
      onClose={props.handleClose}
      hero={
        <Box
          component="img"
          src="/assets/media/thumbnail.svg"
          sx={{
            m: 1,
            height: "140px",
            borderRadius: 1,
            overflow: "hidden",
            bgcolor: `${colors[random]}.main`,
          }}
        />
      }
      actions={
        <>
          <Button variant="text" onClick={props.handleClose}>
            Stäng
          </Button>
          <Button variant="contained" onClick={props.handleClose}>
            Aktivera
          </Button>
        </>
      }
    >
      <Box>
        <Typography variant="h6" gutterBottom>
          {props.dashboard.title}
        </Typography>
        <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est
          nisi, cursus vel tempus ut, lobortis vel magna. Aenean accumsan nulla
          in tempor dictum. Aliquam fermentum porta volutpat.
        </Typography>
        <Typography gutterBottom>
          In dignissim pretium diam, ut fermentum turpis ornare vel. Morbi
          euismod nulla quis urna sagittis, sit amet hendrerit justo aliquam.
        </Typography>
        <Typography gutterBottom>
          Cras ante massa, fringilla a nisl sed, tincidunt tristique tellus.
        </Typography>
      </Box>
    </AdvancedDialog>
  );
};

export default ActivateDashboardModal;
