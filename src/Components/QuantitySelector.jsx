import React, { useState } from "react";
import "./../sass/components/QuantitySelector.scss";
import SecondaryButton from "./SecondaryButton";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(0);

  // define event handlers
  const reduce = () => setQuantity((prevQuantity) => prevQuantity - 1);
  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);

  // determine if max or min quantity
  const minQuantity = quantity === 0;
  const maxQuantity = quantity === 5;

  return (
    <div className="quantity-selector">
      <SecondaryButton onClick={reduce} quantity={minQuantity}>
        -
      </SecondaryButton>
      <div>{quantity}</div>
      <SecondaryButton onClick={increment} quantity={maxQuantity}>
        +
      </SecondaryButton>
    </div>
  );
}
