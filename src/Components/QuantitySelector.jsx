import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectBasket } from "../features/basket/basketSlice";
import SecondaryButton from "./SecondaryButton";
import "./../sass/components/QuantitySelector.scss";

function QuantitySelector({
  internalQuantityForQuantitySelector,
  setInternalQuantityForQuantitySelector,
}) {
  const currentProductId = useSelector((state) => state.page.currentProductId);

  const basketProducts = useSelector(selectBasket);
  const currentProductInBasket = basketProducts.find(
    (product) => product.id === currentProductId
  );
  const currentProduct = useSelector(function (state) {
    return state.products.allProducts.find(
      (product) => product.productId === currentProductId
    );
  });

  // define event handlers
  const reduce = () =>
    setInternalQuantityForQuantitySelector(
      internalQuantityForQuantitySelector - 1
    );
  const increment = () =>
    setInternalQuantityForQuantitySelector(
      internalQuantityForQuantitySelector + 1
    );

  // determine the max or min quantity for the quantity change buttons
  const minQuantity = internalQuantityForQuantitySelector === 0;
  const maxQuantity = (function () {
    if (currentProductInBasket === undefined) {
      // if the basket is empty, then the maximum order that can be placed for would be the entire stock

      return (
        currentProduct.maxQuantityAvailable ===
        internalQuantityForQuantitySelector
      );
    } else {
      // if the product is already available in the basket then the maximum value of the quantity
      // should be equal to total available products minus the products in the cart

      return (
        currentProduct.maxQuantityAvailable -
          currentProductInBasket.quantity ===
        internalQuantityForQuantitySelector
      );
    }
  })();

  return (
    <div className="quantity-selector">
      <SecondaryButton onClick={reduce} disabled={minQuantity}>
        -
      </SecondaryButton>
      <div className="quantity-value">
        {internalQuantityForQuantitySelector}
      </div>
      <SecondaryButton onClick={increment} disabled={maxQuantity}>
        +
      </SecondaryButton>
    </div>
  );
}

QuantitySelector.propTypes = {
  internalQuantityForQuantitySelector: PropTypes.number,
  setInternalQuantityForQuantitySelector: PropTypes.func,
};

export default QuantitySelector;
