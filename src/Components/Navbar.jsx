import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./../sass/components/Navbar.scss";
import { selectDefaultUser } from "../features/users/usersSlice";
import Basket from "./Basket";

function Navbar() {
  const [cartVisible, setcartVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const defaultUser = useSelector(selectDefaultUser);

  function toggleCart() {
    setcartVisible(!cartVisible);
  }

  function closeOverlay() {
    setOverlayVisible(false);
  }

  return (
    <nav>
      <img src={"images/logo.svg"} alt="logo" />
      <button className="overlay-close-btn" onClick={closeOverlay}>
        &times;
      </button>
      <div
        className="main-nav"
        style={{ width: overlayVisible ? "70%" : "0%" }}
      >
        <div className="overlay-content">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="cart-profile">
        <button onClick={toggleCart} className="cart-button">
          <img
            alt="cart logo"
            className="cart-logo"
            src={"images/icon-cart.svg"}
          />
        </button>
        <img
          alt="profile avatar"
          className="avatar"
          src={defaultUser.displayPicture}
        />
        <Basket isVisible={cartVisible} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
