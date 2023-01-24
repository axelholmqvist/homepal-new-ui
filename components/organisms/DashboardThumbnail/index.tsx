import { ReactNode } from "react";

import { Card, CardContent, CardMedia, CardActionArea } from "@mui/material";

import Box from "@components/atoms/Box";
import Typography from "@components/atoms/Typography";
import OverflowTip from "@components/molecules/OverflowTip";

import { useRouter } from "next/router";
import { string } from "prop-types";

interface DashboardThumbnailProps {
  children: ReactNode;
  disabled: boolean;
  link: string;
  mediaContent: ReactNode;
  onClick: () => void;
  title: string;
}

const DashboardThumbnail = (props: DashboardThumbnailProps) => {
  const router = useRouter();

  const handleClick = (event: any) => {
    event.preventDefault();

    if (props.link) {
      router.push(props.link);
    } else {
      props.onClick();
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: props.disabled ? "background.disabled" : null,
        color: props.disabled ? "text.secondary" : null,
      }}
    >
      <CardActionArea
        disableRipple={props.disabled}
        sx={{ cursor: props.disabled ? "default" : null }}
        onClick={props.disabled ? undefined : handleClick}
      >
        <CardMedia
          image="/assets/media/thumbnail.svg"
          sx={{
            m: 1,
            height: "140px",
            borderRadius: 1,
            overflow: "hidden",
            bgcolor: "primary.main",
          }}
        >
          {props.disabled ? (
            <Box
              sx={{
                bgcolor: "black.transparent",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {props.mediaContent}
            </Box>
          ) : null}
        </CardMedia>
        <CardContent>
          <OverflowTip title={props.title}>
            <Typography gutterBottom variant="h6" component="span">
              {props.title}
            </Typography>
          </OverflowTip>
          {props.children}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DashboardThumbnail;
