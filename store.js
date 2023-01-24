import { configureStore } from "@reduxjs/toolkit";

import editModeReducer from "@slices/editModeSlice";

export const store = configureStore({
  reducer: {
    editMode: editModeReducer,
  },
});
