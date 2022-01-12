import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "pages",
  initialState: {
    isOverlayVisible: false,
    isCartVisible: false,
  },
  reducers: {
    makeOverlayVisible(state) {
      state.isOverlayVisible = true;
      return state;
    },
    makeOverlayHidden(state) {
      state.isOverlayVisible = false;
      return state;
    },
    toggleCartVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
      return state;
    },
  },
};

const pagesSlice = createSlice(options);

export function selectOverlayState(state) {
  return state.pages.isOverlayVisible;
}
export function selectCartVisibilityState(state) {
  return state.pages.isCartVisible;
}

export const { makeOverlayHidden, makeOverlayVisible, toggleCartVisibility } =
  pagesSlice.actions;

export default pagesSlice.reducer;
