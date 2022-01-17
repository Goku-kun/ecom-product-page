import React from "react";
import "../sass/components/ProductPage.scss";
import Navbar from "./Navbar";
import Slider from "./Slider";
import ProductInfoContainer from "./ProductInfoContainer";
import "../sass/components/ProductPage.scss";
import { useSelector } from "react-redux";

export default function ProductPage() {
  const currentProductId = useSelector((state) => state.page.currentProductId);

  const currentProduct = useSelector(function (state) {
    return state.products.find((product) => product.id === currentProductId);
  });
  return (
    <div id="product-page">
      <Navbar />
      <div className="main">
        <Slider imagesArray={currentProduct.displayPictures} />
        <ProductInfoContainer product={currentProduct} />
      </div>
    </div>
  );
}
