import React from "react";
import "./App.scss";
// import Navbar from "./Components/Navbar";
// import Price from "./Components/Price";
import Slider from "./Components/Slider";
import { useSelector } from "react-redux";
import { selectDefaultProduct } from "./features/products/productsSlice";
// import QuantitySelector from "./Components/QuantitySelector";
// import Price from "./Components/Price";

function App() {
  const imagesArray = useSelector(selectDefaultProduct).displayPictures;

  return (
    <div className="App">
      <Slider imagesArray={imagesArray} />
    </div>
  );
}

export default App;
