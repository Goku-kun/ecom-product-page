import React from "react";
import "../sass/components/ProductPage.scss";
import Navbar from "./Navbar";
import Slider from "./Slider";
import ProductInfoContainer from "./ProductInfoContainer";
import "../sass/components/ProductPage.scss";

function ProductPage() {
  return (
    <div className="product-page">
      <Navbar />
      <div className="main">
        <Slider />
        <ProductInfoContainer />
      </div>
    </div>
  );
}
export default ProductPage;
