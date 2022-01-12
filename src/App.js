import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
// import Price from "./Components/Price";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Price listPrice={250} percentOff={50} /> */}
    </div>
  );
}

export default App;
