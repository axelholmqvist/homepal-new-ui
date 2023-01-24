import { useTheme } from "@mui/material/styles";

import Icon, { IconNames } from "@components/atoms/Icon";
import Paper from "@components/atoms/Paper";
import Stack from "@components/atoms/Stack";
import Typography from "@components/atoms/Typography";
import Box from "@components/atoms/Box";

const widgets = [
  {
    title: "Cirkeldiagram",
    icon: "PieChartTwoTone",
  },
  {
    title: "Kombinationsdiagram",
    icon: "AnalyticsTwoTone",
  },
  {
    title: "Nyckeltal",
    icon: "ScoreTwoTone",
  },
  {
    title: "Pivottabell",
    icon: "PivotTableChartTwoTone",
  },
  {
    title: "Stapeldiagram",
    icon: "InsertChartTwoTone",
  },
];

const AddWidgetList = () => {
  const theme = useTheme();

  return (
    <>
      {/*
      <Stack
        direction="row"
        spacing={1}
        sx={{
          p: 1,
          bgcolor: "secondary.transparent",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: theme.palette.secondary.main,
          //borderBottomColor: theme.palette.secondary.transparent,
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            height: "0.5em",
          },
          "&::-webkit-scrollbar-track": {
            //borderBottomColor: theme.palette.secondary.transparent,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.secondary.main,
            //borderBottomColor: theme.palette.secondary.transparent,
            borderRadius: "0.25em",
          },
          minWidth: 0,
        }}
      >
        {widgets.map((widget, i) => (
          <WidgetThumbnail title={widget.title} icon={widget.icon} key={i} />
        ))}
      </Stack>
      */}
      <Box
        sx={{
          gap: 1,
          display: "flex",
          flexDirection: "crow",
          flexGrow: 1,
          overflowX: "auto",
          p: 1,
          bgcolor: "transparent.secondary",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "transparent.secondary",
          "&::-webkit-scrollbar": {
            height: "0.5em",
          },
          "&::-webkit-scrollbar-track": {
            borderBottomColor: "transparent.secondary",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent.secondary",
            borderRadius: "0.25em",
          },
        }}
      >
        {widgets.map((widget, i) => (
          <WidgetThumbnail title={widget.title} icon={widget.icon} key={i} />
        ))}
      </Box>
    </>
  );
};

const WidgetThumbnail = (props: any) => {
  return (
    <Box
      sx={{
        flex: "0 0 172px",
        "&:hover": {
          cursor: "grab",
        },
        "&:hover:active": {
          cursor: "grabbing",
        },
      }}
    >
      <div
        className="droppable-element"
        draggable={true}
        unselectable="on"
        // this is a hack for firefox
        // Firefox requires some kind of initialization
        // which we can do by adding this attribute
        // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
      >
        <Paper
          sx={{
            py: 0.5,
            px: 1,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Icon name={props.icon} color="primary" />
              <Typography
                variant="body2"
                component="span"
                color="text.secondary"
                sx={{ lineHeight: 1 }}
              >
                {props.title}
              </Typography>
            </Stack>
            <Icon name="DragIndicator" sx={{ color: "action.disabled" }} />
          </Stack>
        </Paper>
      </div>
    </Box>
  );
};

export default AddWidgetList;
