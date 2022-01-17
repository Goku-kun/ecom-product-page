import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ProductInfo from "./ProductInfo";
import Price from "./Price";
import QuantitySelector from "./QuantitySelector";
import CheckoutButton from "./CheckoutButton";
import { addProductToBasket } from "../features/basket/basketSlice";
import "../sass/components/ProductInfoContainer.scss";

export default function ProductInfoContainer({ product }) {
  const [
    internalQuantityForQuantitySelector,
    setInternalQuantityForQuantitySelector,
  ] = useState(0);

  const dispatch = useDispatch();

  return (
    <div id="product-info-container">
      <ProductInfo product={product} />
      <Price listPrice={product.price} percentOff={product.discount} />
      <div className="flex-container-quantity-checkout">
        <QuantitySelector
          internalQuantityForQuantitySelector={
            internalQuantityForQuantitySelector
          }
          setInternalQuantityForQuantitySelector={
            setInternalQuantityForQuantitySelector
          }
        />
        <CheckoutButton
          type="add-to-cart-button"
          handleClick={() => {
            if (internalQuantityForQuantitySelector === 0) return;
            dispatch(
              addProductToBasket({
                ...product,
                quantity: internalQuantityForQuantitySelector,
              })
            );
            setInternalQuantityForQuantitySelector(0);
          }}
        >
          <img
            id="cart-icon"
            src="./images/icon-cart-white.svg"
            alt="cart icon"
          />
          <p id="add-to-cart">Add to cart</p>
        </CheckoutButton>
      </div>
    </div>
  );
}

ProductInfoContainer.propTypes = {
  product: PropTypes.object.isRequired,
};
