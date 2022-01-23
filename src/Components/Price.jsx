import React from "react";
import { useSelector } from "react-redux";
import "../sass/components/Price.scss";
import { selectCurrentProduct } from "../features/page/pageSlice";

function Price() {
  // Current price is calculated from the list price and percentage off. We can hardcode the sale price if necessary

  const { price, discount } = useSelector(selectCurrentProduct);

  return (
    <div className="price-container" data-testid="price-component-test">
      <div className="current-percent-container">
        <p className="current-price" data-testid="price-discounted-test">
          $
          {
            // Subtract the percentage off to get the sale price
            (price - (price * discount) / 100).toFixed(2)
          }
        </p>
        <p className="percent-off">${discount}%</p>
      </div>
      <p className="list-price">
        {/* The list price is intentionally outside the span for the custim strikethrough */}
        <span className="strike"></span>${String(price.toFixed(2))}
      </p>
    </div>
  );
}

export default Price;
