import React from "react";
import PropTypes from "prop-types";
import "../sass/components/Price.scss";

export default function Price(props) {
  // Current price is calculated from the list price and percentage off. We can hardcode the sale price if necessary

  return (
    <div className="price-container">
      <div className="current-percent-container">
        <p className="current-price">
          $
          {
            // Subtract the percentage off to get the sale price
            (
              props.listPrice -
              (props.listPrice * props.percentOff) / 100
            ).toFixed(2)
          }
        </p>
        <p className="percent-off">${props.percentOff}%</p>
      </div>
      <p className="list-price">
        {/* The list price is intentionally outside the span for the custim strikethrough */}
        <span className="strike"></span>${String(props.listPrice.toFixed(2))}
      </p>
    </div>
  );
}

Price.propTypes = {
  listPrice: PropTypes.number,
  percentOff: PropTypes.number,
};
