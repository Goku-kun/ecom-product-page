import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
<<<<<<< HEAD
// import Price from "./Components/Price";
=======
import Price from "./Components/Price";
import Slider from "./Components/Slider";
import { useSelector } from "react-redux";
import { selectDefaultProduct } from "./features/products/productsSlice";
>>>>>>> slider

function App() {
  const imagesArray = useSelector(selectDefaultProduct).displayPictures;

  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
      {/* <Price listPrice={250} percentOff={50} /> */}
=======
      <Price listPrice={250} percentOff={50} />
      <div id="slider-container">
        <Slider imagesArray={imagesArray} />
      </div>
>>>>>>> slider
    </div>
  );
}

export default App;
