import React from "react";
import { PropTypes } from "prop-types";
import "../sass/components/_price.scss";

export default function Price(props) {
  // Current price is calculated from the list price and percentage off. We can hardcode the sale price if necessary

  return (
    <div id="price-container">
      <div id="current-percent-container">
        <p id="current-price">
          $
          {(
            props.listPrice -
            (Number(props.listPrice) * Number(props.percentOff)) / 100
          ).toFixed(2)}
        </p>
        <p id="percent-off">${props.percentOff}%</p>
      </div>
      <p id="list-price">
        <span className="strike"></span>${String(props.listPrice)}
      </p>
    </div>
  );
}

Price.propTypes = {
  listPrice: PropTypes.string,
  percentOff: PropTypes.string,
  width: PropTypes.string,
};
