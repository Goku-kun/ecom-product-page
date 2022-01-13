import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Price from "./Components/Price";
import Slider from "./Components/Slider";
import { useSelector } from "react-redux";
import { selectDefaultProduct } from "./features/products/productsSlice";

function App() {
  const imagesArray = useSelector(selectDefaultProduct).displayPictures;

  return (
    <div className="App">
      <Navbar />
      <Price listPrice={250} percentOff={50} />
      <div id="slider-container">
        <Slider imagesArray={imagesArray} />
      </div>
    </div>
  );
}

export default App;
