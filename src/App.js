import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { MoonLoader } from "react-spinners";
import "./App.scss";
import ProductPage from "./Components/ProductPage";
import { setCurrentProductId } from "./features/page/pageSlice";
import {
  fetchProductById,
  selectIsFetching,
} from "./features/products/productsSlice";

function App({ productId }) {
  // assuming that there is react router which associates each product page using a product id
  const dispatch = useDispatch();
  const isFetching = useSelector(selectIsFetching);

  useEffect(
    function () {
      dispatch(setCurrentProductId(productId));
      dispatch(fetchProductById(productId));
    },
    [productId, setCurrentProductId, fetchProductById, dispatch]
  );

  return (
    <div className="App" data-testid="app-component-test">
      {isFetching && (
        <div className="loader-styles">
          <MoonLoader size={80} color={"#ff7d1a"} />
        </div>
      )}

      {!isFetching && <ProductPage />}
    </div>
  );
}

export default App;

App.propTypes = {
  productId: PropTypes.string.isRequired,
};
