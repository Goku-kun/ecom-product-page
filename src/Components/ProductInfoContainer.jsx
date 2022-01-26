// packages import
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// scss for the page
import "../sass/components/ProductInfoContainer.scss";
// component imports
import ProductInfo from "./ProductInfo";
import Price from "./Price";
import QuantitySelector from "./QuantitySelector";
import PrimaryButton from "./PrimaryButton";
import { addProductToBasket } from "../features/basket/basketSlice";
import { selectCurrentProduct } from "../features/page/pageSlice";

function ProductInfoContainer() {
  const currentProduct = useSelector(selectCurrentProduct);
  const dispatch = useDispatch();
  const [
    internalQuantityForQuantitySelector,
    setInternalQuantityForQuantitySelector,
  ] = useState(0);

  return (
    <div
      className="product-info-container"
      data-testid="productinfocontainer-component-test"
    >
      <ProductInfo />
      <Price />
      <div className="flex-container-quantity-checkout">
        <QuantitySelector
          internalQuantityForQuantitySelector={
            internalQuantityForQuantitySelector
          }
          setInternalQuantityForQuantitySelector={
            setInternalQuantityForQuantitySelector
          }
        />
        <PrimaryButton
          type="add-to-cart-button"
          handleClick={() => {
            if (internalQuantityForQuantitySelector === 0) return;

            dispatch(
              addProductToBasket({
                ...currentProduct,
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
        </PrimaryButton>
      </div>
    </div>
  );
}

export default ProductInfoContainer;
