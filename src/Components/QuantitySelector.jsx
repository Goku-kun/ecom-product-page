import React, {useState} from "react";
import "./../sass/components/quantity_selector.scss";

export default function QuantitySelector () {

  const [quantity, setQuantity] = useState(0);

  // define event handlers
  const reduce = () =>
    setQuantity((prevQuantity) => prevQuantity - 1);
  const increment = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);

  // determine if max or min quantity
  const minQuantity = quantity === 0;
  const maxQuantity = quantity === 5;

  return(
    <div className="quantity-selector">
      <button type="button" disabled={minQuantity} onClick={reduce}>-</button>
      <div>{quantity}</div>
      <button type="button" disabled={maxQuantity} onClick={increment}>+</button>
    </div>
  );
}