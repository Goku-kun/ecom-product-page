import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/usersSlice";
import productsReducer from "./features/products/productsSlice";
import basketReducer from "./features/basket/basketSlice";
import pageReducer from "./features/page/pageSlice";

export default configureStore({
  reducer: {
    users: userReducer,
    products: productsReducer,
    basket: basketReducer,
    page: pageReducer,
  },
});
