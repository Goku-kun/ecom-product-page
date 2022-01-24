import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "basket",
  initialState: [],
  reducers: {
    addProductToBasket(state, action) {
      let product = state.find(
        (basketProduct) => basketProduct.productId === action.payload.productId
      );
      if (product === undefined || action.payload.quantity === undefined) {
        state.push({ quantity: 1, ...action.payload });
        return state;
      } else {
        product.quantity += action.payload.quantity;
        return state;
      }
    },
    removeProductFromBasket(state, action) {
      return state.filter(
        (basketProduct) => basketProduct.productId !== action.payload.productId
      );
    },
  },
};

export function selectBasket(state) {
  return state.basket;
}

const basketSlice = createSlice(options);

export const { addProductToBasket, removeProductFromBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
