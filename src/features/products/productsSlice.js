import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { firestoreDb } from "../../utils/firestore";
import { getDoc, doc } from "firebase/firestore";
import { setCurrentProduct } from "../page/pageSlice";

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async function (productId, thunkAPI) {
    const currentState = thunkAPI.getState();
    let product = currentState.products.allProducts.find(
      (product) => product.productId === productId
    );

    // if the current product has been already fetched once before, fsend the one stored into the local cache.
    if (product !== undefined) {
      return product;
    } else {
      try {
        const productDocRef = doc(firestoreDb, "products", productId);
        const docRef = await getDoc(productDocRef);
        product = docRef.data();
        thunkAPI.dispatch(setCurrentProduct(product));
      } catch (error) {
        // handle error thrown here
        console.log(error);
      }
      return product;
    }
  }
);

const options = {
  name: "products",
  initialState: { isFetching: true, fetchingError: false, allProducts: [] },
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(fetchProductById.pending, function (state) {
      state.isFetching = true;
    });
    builder.addCase(fetchProductById.fulfilled, function (state, action) {
      state.isFetching = false;
      state.allProducts.push(action.payload);
    });
    builder.addCase(fetchProductById.rejected, function (state) {
      state.isFetching = false;
      state.fetchingError = true;
    });
  },
};

const productsSlice = createSlice(options);

export function selectProducts(state) {
  return state.products.allProducts;
}

export function selectIsFetching(state) {
  return state.products.isFetching;
}

export default productsSlice.reducer;
