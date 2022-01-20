import React from "react";
import PropTypes from "prop-types";
import "./../sass/components/ProductInfo.scss";

function ProductInfo({ product }) {
  return (
    <div className="product-info-elements">
      <p className="company-name">{product.companyName.toUpperCase()}</p>

      <p className="product-name">{product.name}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInfo;
