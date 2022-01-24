import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "page",
  initialState: {
    isOverlayVisible: false,
    isCartVisible: false,
    currentProductId: 0,
    currentProduct: {},
  },
  reducers: {
    makeOverlayVisible(state) {
      state.isOverlayVisible = true;
    },
    makeOverlayHidden(state) {
      state.isOverlayVisible = false;
    },
    toggleCartVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    setCurrentProductId(state, action) {
      state.currentProductId = action.payload;
    },
    setCurrentProduct(state, action) {
      state.currentProduct = action.payload;
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

export function selectCurrentProduct(state) {
  return state.page.currentProduct;
}

export const {
  makeOverlayHidden,
  makeOverlayVisible,
  toggleCartVisibility,
  setCurrentProductId,
  setCurrentProduct,
} = pageSlice.actions;

export default pageSlice.reducer;
