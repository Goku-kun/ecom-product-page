import { createSlice } from "@reduxjs/toolkit";

var options = {
  name: "basket",
  initialState: [
    {
      id: 0,
      name: "Fall Limited Edition Sneakers",
      quantity: 1,
      unitPriceInUsd: 125,
      thumbnail: "images/image-product-1-thumbnail.jpg",
    },
  ],
  reducers: {
    addProduct(state, action) {
      var product = state.find(
        (basketProduct) => basketProduct.id === action.payload.id
      );
      if (product === undefined) {
        state.push({ quantity: 1, ...action.payload });
        return state;
      } else {
        product.quantity += 1;
        return state;
      }
    },
    removeOneProduct(state, action) {
      var product = state.find(
        (basketProduct) => basketProduct.id === action.payload.id
      );
      if (product.quantity > 1) {
        product.quantity -= 1;
        return state;
      } else if (product.quantity === 1) {
        return state.filter(
          (basketProduct) => basketProduct.id !== action.payload.id
        );
      }
    },
    removeProduct(state, action) {
      return state.filter(
        (basketProduct) => basketProduct.id !== action.payload.id
      );
    },
  },
};

export function selectBasket(state) {
  return state.basket;
}

const basketSlice = createSlice(options);

export var { addProduct, removeOneProduct, removeProduct } =
  basketSlice.actions;

export default basketSlice.reducer;
