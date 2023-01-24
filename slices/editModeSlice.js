import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const editModeSlice = createSlice({
  name: "editMode",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = editModeSlice.actions;

export default editModeSlice.reducer;
