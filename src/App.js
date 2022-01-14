import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
// import Price from "./Components/Price";
import Slider from "./Components/Slider";
import { useSelector } from "react-redux";
import { selectDefaultProduct } from "./features/products/productsSlice";
// import QuantitySelector from "./Components/QuantitySelector";

function App() {
  const imagesArray = useSelector(selectDefaultProduct).displayPictures;

  return (
    <div className="App">
      <Navbar />
      <Slider imagesArray={imagesArray} />
      {/* <Price listPrice={250} percentOff={50} /> */}
    </div>
  );
}

export default App;
