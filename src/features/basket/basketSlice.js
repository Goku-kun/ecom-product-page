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

export function selectTotalProductCountInTheBasket(state) {
  let basketProducts = state.basket;
  let totalCount = 0;
  if (basketProducts.length === 0) {
    return totalCount;
  } else {
    basketProducts.forEach((product) => {
      totalCount += product.quantity;
    });
    return totalCount;
  }
}

const basketSlice = createSlice(options);

export const { addProductToBasket, removeProductFromBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
