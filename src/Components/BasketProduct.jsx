import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../features/basket/basketSlice";
// import IconDelete from

function BasketProduct(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="basket-product">
        <img src={props.thumbnail} alt="product thumbnail" />
        <div className="basket-product-information">
          <p>{props.name}</p>
          <p>
            ${props.unitPriceInUsd.toFixed(2)} x {props.quantity}
            {"   "}
            <strong>
              ${(props.unitPriceInUsd * props.quantity).toFixed(2)}
            </strong>
          </p>
        </div>
        <button
          className="remove-product"
          onClick={() => dispatch(removeProduct({ id: props.id }))}
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
};

export default BasketProduct;
