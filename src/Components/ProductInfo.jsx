import React from "react";
import "./../sass/components/ProductInfo.scss";

function productInfo() {
  const productInfo = {
    companyName: "Sneaker Company",
    productName: "Fall Limited Edition Sneakers",
    productDescription:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
  };

  return (
    <div id="product-info-elements">
      <p id="company-name">{productInfo.companyName.toUpperCase()}</p>

      <p id="product-name">{productInfo.productName}</p>
      <p id="product-description">{productInfo.productDescription}</p>
    </div>
  );
}

export default productInfo;
