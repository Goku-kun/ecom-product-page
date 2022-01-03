import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basket/basketSlice";
import BasketProduct from "./BasketProduct";

function Basket({ isVisible }) {
  const basketProducts = useSelector(selectBasket);

  return (
    <div
      className={`basket-content ${isVisible ? "basket-content-visible" : ""}`}
    >
      <h3 className="basket-heading">Cart</h3>
      {basketProducts.length === 0 && (
        <div className="basket-empty">Your cart is empty.</div>
      )}
      {basketProducts.map(function (product) {
        return (
          <BasketProduct
            name={product.name}
            unitPriceInUsd={product.unitPriceInUsd}
            thumbnail={product.thumbnail}
            quantity={product.quantity}
            id={product.id}
            key={new Date().getTime()}
          ></BasketProduct>
        );
      })}
    </div>
  );
}

Basket.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Basket;
