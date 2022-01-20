import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "page",
  initialState: {
    isOverlayVisible: false,
    isCartVisible: false,
    currentProductId: 0,
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
    setCurrentProductId(state, action) {
      state.currentProductId = action.payload;
    },
  },
};

const pageSlice = createSlice(options);

export function selectOverlayState(state) {
  return state.page.isOverlayVisible;
}
export function selectCartVisibilityState(state) {
  return state.page.isCartVisible;
}

export function selectCurrentProductId(state) {
  return state.page.currentProductId;
}

export const {
  makeOverlayHidden,
  makeOverlayVisible,
  toggleCartVisibility,
  setCurrentProductId,
} = pageSlice.actions;

export default pageSlice.reducer;
