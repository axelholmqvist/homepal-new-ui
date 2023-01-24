import React from "react";

import { InputBase } from "@mui/material";

import Divider from "@components/atoms/Divider";
import Icon from "@components/atoms/Icon";
import IconButton from "@mui/material/IconButton";
import Paper from "@components/atoms/Paper";

interface SearchProps {
  placeholder: string;
}

const Search = React.forwardRef((props: SearchProps, ref: any) => {
  return (
    <Paper
      component="form"
      sx={{
        width: "100%",
        px: 0.5,
        py: 0.25,
        display: "flex",
        alignItems: "center",
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder={props.placeholder} />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: "10px" }}>
        <Icon name="Search" />
      </IconButton>
    </Paper>
  );
});

Search.displayName = "Search";
export default Search;
