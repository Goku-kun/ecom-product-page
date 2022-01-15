import React from "react";
// import { PropTypes } from "prop-types";
import ProductInfo from "./ProductInfo";
import Price from "./Price";
import QuantitySelector from "./QuantitySelector";
// import SecondaryButton from "./SecondaryButton";
import CheckoutButton from "./CheckoutButton";
import "../sass/components/ProductInfoContainer.scss";

export default function ProductInfoContainer() {
  return (
    <div id="product-info-container">
      <ProductInfo />
      <Price listPrice={250} percentOff={50} />
      <QuantitySelector style={{ width: "100%" }} />
      <CheckoutButton width={"100%"}>
        <img id="cart-icon" src="./images/icon-cart.svg" alt="cart icon" />
        <p id="add-to-cart">Add to cart</p>
      </CheckoutButton>
    </div>
  );
}
