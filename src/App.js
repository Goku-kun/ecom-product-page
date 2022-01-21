import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "./App.scss";
import ProductPage from "./Components/ProductPage";
import { setCurrentProductId } from "./features/pages/pageSlice";

function App({ productId }) {
  // assuming that there is react router which associates each product page using a product id
  const dispatch = useDispatch();
  dispatch(setCurrentProductId(productId));

  return (
    <div className="App" data-testid="app-component-test">
      <ProductPage />
    </div>
  );
}

export default App;

App.propTypes = {
  productId: PropTypes.number.isRequired,
};
