import React from "react";

import { SequenceSpinner } from "react-spinners-kit";
import { useTheme } from "@mui/material/styles";

import Box from "@components/atoms/Box";
import Typography from "@components/atoms/Typography";

interface LoadingSpinnerProps {
  title: string;
  loading: boolean;
}

const LoadingSpinner = React.forwardRef(
  (props: LoadingSpinnerProps, ref: any) => {
    const theme = useTheme();

    return (
      <Box
        ref={ref}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <SequenceSpinner
          size={40}
          color={theme.palette.primary.main}
          frontColor={theme.palette.primary.main}
          backColor={theme.palette.primary.main}
          loading={props.loading}
        />
        <Typography color="text.secondary" variant="body2" fontWeight="medium">
          {props.title}
        </Typography>
      </Box>
    );
  }
);

LoadingSpinner.displayName = "LoadingSpinner";
export default LoadingSpinner;
