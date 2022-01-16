import React from "react";
// import { PropTypes } from "prop-types";
import "../sass/components/ProductPage.scss";
import Navbar from "./Navbar";

import Slider from "./Slider";
import { useSelector } from "react-redux";
import { selectDefaultProduct } from "../features/products/productsSlice";
import ProductInfoContainer from "./ProductInfoContainer";
import "../sass/components/ProductPage.scss";

export default function ProductPage() {
  const defaultProduct = useSelector(selectDefaultProduct);
  return (
    <div id="product-page">
      <Navbar />
      <div className="main">
        <Slider imagesArray={defaultProduct.displayPictures} />
        <ProductInfoContainer product={defaultProduct} />
      </div>
    </div>
  );
}
