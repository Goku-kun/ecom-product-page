import React from "react";
import PropTypes from "prop-types";
import "./../sass/components/ProductInfo.scss";

function ProductInfo({ product }) {
  return (
    <div id="product-info-elements">
      <p id="company-name">{product.companyName.toUpperCase()}</p>

      <p id="product-name">{product.name}</p>
      <p id="product-description">{product.description}</p>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInfo;
