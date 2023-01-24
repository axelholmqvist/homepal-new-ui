import { Typography, Stack, Box } from "@mui/material";

import KPILine from "./KPILine";
import TrendChip from "@components/organisms/Widget/TrendChip";
//import Widget from "@components/dashboard/Widget";
import Widget from "@components/organisms/Widget";

export default function KPIBox(props) {
  return (
    <Widget
      title={props.title}
      subtitle={props.subtitle}
      edit={props.edit}
      embedded={props.embedded}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack direction="row" spacing={1} sx={{ pb: 1, alignItems: "center" }}>
          <Typography variant="h2" sx={{ lineHeight: "100%", mt: 0, mb: 0 }}>
            {props.value}
          </Typography>
          {props.unit && (
            <Typography
              variant="h6"
              color="text.disabled"
              sx={{ lineHeight: "100%" }}
            >
              {props.unit}
            </Typography>
          )}
          <TrendChip value={props.comparedValue} />
        </Stack>
        <Box sx={{ flex: "1 1 1px", overflow: "hidden" }}>
          <KPILine />
        </Box>
      </Box>
    </Widget>
  );
}
