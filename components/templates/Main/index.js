import Box from "@components/atoms/Box";
import GlobalSidebar from "@components/organisms/GlobalSidebar";
import { useTheme } from "@mui/material";
import GlobalTopbar from "../../organisms/GlobalTopbar";

const Main = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      <GlobalSidebar />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflowX: "hidden",
          minWidth: theme.breakpoints.values.sm,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Main;
