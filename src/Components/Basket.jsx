import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basket/basketSlice";
import BasketProduct from "./BasketProduct";
import PrimaryButton from "../Components/PrimaryButton";
import "./../sass/components/Basket.scss";

function Basket({ isVisible }) {
  const basketProducts = useSelector(selectBasket);

  function handleCheckout() {
    // We're not handling checkout implementation since there is no checkout page
    // Therefore, do nothing.
  }

  return (
    <div
      className={`basket-content ${
        isVisible ? "basket-content-visible" : "basket-content-invisible"
      }`}
      data-testid="basket-component-test"
    >
      <h3 className="basket-heading">Cart</h3>
      {basketProducts.length === 0 ? (
        <div className="basket-empty">Your cart is empty.</div>
      ) : (
        <>
          {basketProducts.map(function (product) {
            return (
              <BasketProduct
                name={product.name}
                unitPriceInUsd={product.price}
                discount={product.discount}
                thumbnail={product.thumbnailPictures[0]}
                quantity={product.quantity}
                productId={product.productId}
                key={new Date().getTime()}
              />
            );
          })}
          <PrimaryButton
            type="basket-checkout-button"
            handleClick={handleCheckout}
          >
            Checkout
          </PrimaryButton>
        </>
      )}
    </div>
  );
}

Basket.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Basket;
