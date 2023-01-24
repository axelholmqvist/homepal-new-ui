import "@node_modules/react-grid-layout/css/styles.css";
import "@node_modules/react-resizable/css/styles.css";

import { useTheme } from "@mui/material/styles";
import { Collapse } from "@mui/material";

import Box from "@components/atoms/Box";
import AddWidgetList from "@components/organisms/AddWidgetList";

import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";

import { useSelector } from "react-redux";

//https://javascript.plainenglish.io/tired-of-boring-static-dashboards-lets-build-a-fully-customizable-dashboard-in-react-88cb5369cfe1

const DashboardGrid = (props) => {
  const theme = useTheme();
  const editMode = useSelector((state) => state.editMode.value);

  const onDrop = (layout, layoutItem, _event) => {
    alert(
      `Dropped element props:\n${JSON.stringify(
        layoutItem,
        ["i", "x", "y", "w", "h"],
        2
      )}`
    );
  };

  return (
    <>
      <Collapse in={editMode}>
        <AddWidgetList />
      </Collapse>
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          bgcolor: props.editMode ? "transparent.secondary" : null,
          overflowX: "hidden",
        }}
      >
        <Box sx={{ position: "relative", display: "block" }}>
          <ResponsiveGridLayout
            className="layout"
            layouts={props.layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 12, sm: 4, xs: 1, xxs: 1 }}
            rowHeight={100}
            width={props.size.width - parseInt(theme.spacing(2 * 2))}
            draggableCancel={".MuiDialog-root"}
            isDraggable={props.editMode}
            isResizable={props.editMode}
            isDroppable={true}
            onDrop={onDrop}
          >
            {props.children}
          </ResponsiveGridLayout>
        </Box>
      </Box>
    </>
  );
};

export default withSize({
  refreshMode: "debounce",
  refreshRate: 60,
})(DashboardGrid);
