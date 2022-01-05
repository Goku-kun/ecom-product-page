import { createSlice } from "@reduxjs/toolkit";

let uniqueId = 0;

const options = {
  name: "products",
  initialState: [
    {
      id: 0,
      name: "Shoe",
      displayPictures: [
        "images/image-product-1.jpg",
        "images/image-product-2.jpg",
        "images/image-product-3.jpg",
        "images/image-product-4.jpg",
      ],
      thumbnailPictures: [
        "images/image-product-1-thumbnail.jpg",
        "images/image-product-2-thumbnail.jpg",
        "images/image-product-3-thumbnail.jpg",
        "images/image-product-4-thumbnail.jpg",
      ],
    },
  ],
  reducers: {
    addProduct(state, action) {
      state.push({
        id: uniqueId++,
        ...action.payload,
      });
      return state;
    },
    removeProduct(state, action) {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
};

const productSlice = createSlice(options);

export function selectProducts(state) {
  return state.products;
}

export function selectDefaultProduct(state) {
  return state.products.find((product) => product.id === 0);
}

export const { addproduct, removeproduct } = productSlice.actions;

export default productSlice.reducer;
