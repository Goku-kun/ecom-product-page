// import store from "../../store";
import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
// import { selectProducts } from "./productsSlice";

// We currently only have 1 product to display.
// The products array index will need to be dynamic to scale
// the app for more products.

//

const options = {
  name: "currentProduct",
  initialState: "public/images/image-product-1.jpg",
  reducers: {
    nextProduct(state) {
      const imagesArray = getProtectedThing();
      console.log(imagesArray);
      let length = imagesArray.length;
      let currentImageIndex = imagesArray.indexOf(state.product);
      if (currentImageIndex < length - 1) {
        state.product = imagesArray[++currentImageIndex];
      } else {
        state.product = imagesArray[0];
      }
      return state;
    },
    previousProduct(state) {
      const imagesArray = getProtectedThing();
      let length = imagesArray.length;
      let currentImageIndex = imagesArray.indexOf(state.product);
      if (currentImageIndex > 0) {
        state.product = imagesArray[--currentImageIndex];
      } else {
        state.product = imagesArray[length - 1];
      }
      return state;
    },
  },
};

export function getProtectedThing() {
  return (dispatch, getState) => {
    // grab current state
    const state = getState();

    // get the JWT token out of it
    // (obviously depends on how your store is structured)
    const imagesArray = state.products[0].displayPictures;
    return imagesArray;
  };
}

const currentProductSlice = createSlice(options);

export function selectCurrentProduct(state) {
  return state.product;
}

export const { nextProduct, previousProduct } = currentProductSlice.actions;
export default currentProductSlice.reducer;
