import * as React from "react";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

import Stack from "@components/atoms/Stack";
import OptionsMenu from "@components/molecules/OptionsMenu";

const StyledTabList = styled(TabList)();
const StyledTab = styled(Tab)();

const TabMenu = (props) => {
  const [value, setValue] = useState("1");

  const editMode = useSelector((state) => state.editMode.value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabList = [
    {
      label: "Översikt",
    },
    {
      label: "Trend",
    },
    {
      label: "Benchmark",
    },
    {
      label: "Data",
    },
  ];

  const [tabs, setTabs] = useState(
    [...tabList].map((_, index) => ({
      id: `tab${index + 1}`,
      label: _.label,
      value: `${index + 1}`,
    }))
  );

  const onDragEnd = (result) => {
    const newTabs = Array.from(tabs);
    const draggedTab = newTabs.splice(result.source.index, 1)[0];
    newTabs.splice(result.destination?.index, 0, draggedTab);
    setTabs(newTabs);
  };

  const _renderTabList = (droppableProvided) => (
    <StyledTabList
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      sx={{
        "& .MuiTab-root": {
          minHeight: "48px",
        },
      }}
    >
      {tabs.map((tab, index) => {
        const child = (
          <StyledTab label={tab.label} value={tab.value} key={index} />
        );

        return (
          <DraggableTab
            label={tab.label}
            value={tab.value}
            index={index}
            key={index}
            child={child}
            icon={
              editMode ? (
                <OptionsMenu
                  tooltip="Åtgärder"
                  options={[
                    {
                      title: "Byt namn",
                      icon: "EditOutlined",
                      onClick: () => dispatch(toggle()),
                    },
                    {
                      title: "Radera",
                      icon: "DeleteOutlined",
                      onClick: () => setEditTitleModalOpen(true),
                      divider: true,
                    },
                  ]}
                />
              ) : null
            }
            iconPosition="end"
            sx={{
              pr: editMode ? 0 : null,
              "& .MuiIconButton-root": {
                ml: 0,
              },
            }}
          />
        );
      })}
      {droppableProvided ? droppableProvided.placeholder : null}
    </StyledTabList>
  );

  const _renderTabListWrappedInDroppable = () => (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="1" direction="horizontal">
          {(droppableProvided) => (
            <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {_renderTabList(droppableProvided)}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );

  return (
    <TabContext value={value}>
      <Stack>{_renderTabListWrappedInDroppable()}</Stack>
    </TabContext>
  );
};

const DraggableTab = (props) => {
  const editMode = useSelector((state) => state.editMode.value);

  return (
    <Draggable
      draggableId={`${props.index}`}
      index={props.index}
      disableInteractiveElementBlocking
      isDragDisabled={!editMode}
    >
      {(draggableProvided) => (
        <div
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
        >
          {React.cloneElement(props.child, {
            ...props,
            ...draggableProvided.dragHandleProps,
          })}
        </div>
      )}
    </Draggable>
  );
};

export default TabMenu;
