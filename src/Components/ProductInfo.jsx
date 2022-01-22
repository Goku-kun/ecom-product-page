import React from "react";
import { useSelector } from "react-redux";
import "./../sass/components/ProductInfo.scss";
import { selectCurrentProduct } from "../features/page/pageSlice";

function ProductInfo() {
  const product = useSelector(selectCurrentProduct);
  return (
    <div className="product-info-elements">
      <p className="company-name">{product.companyName.toUpperCase()}</p>

      <p className="product-name">{product.name}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
}

export default ProductInfo;
