import { createSlice } from "@reduxjs/toolkit";

let uniqueId = 0;

const options = {
  name: "products",
  initialState: [
    {
      id: 0,
      companyName: "SNEAKER COMPANY",
      name: "Fall Limited Edition Sneakers",
      price: 250,
      discount: 50,
      maxQuantityAvailable: 10,
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
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

const productsSlice = createSlice(options);

export function selectProducts(state) {
  return state.products;
}

export const { addproduct, removeproduct } = productsSlice.actions;

export default productsSlice.reducer;
