import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { removeProductFromBasket } from "../features/basket/basketSlice";
import "../sass/components/BasketProduct.scss";

function BasketProduct(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="basket-product">
        <img src={props.thumbnail} alt="product thumbnail" />
        <div className="basket-product-information">
          <p>{props.name}</p>
          <p>
            {/* props.discount is the percent off as an integer, so the / 100 converts it into a decimal for proper calculation */}
            ${((props.unitPriceInUsd * props.discount) / 100).toFixed(2)} x{" "}
            {props.quantity}
            {"   "}
            <strong>
              $
              {(
                ((props.unitPriceInUsd * props.discount) / 100) *
                props.quantity
              ).toFixed(2)}
            </strong>
          </p>
        </div>
        <button
          className="remove-product"
          onClick={() => dispatch(removeProductFromBasket({ id: props.id }))}
        >
          <img src="images/icon-delete.svg" alt="remove product" />
        </button>
      </div>
    </>
  );
}

BasketProduct.propTypes = {
  name: PropTypes.string.isRequired,
  unitPriceInUsd: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
};

export default BasketProduct;
