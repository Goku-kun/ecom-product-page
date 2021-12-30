import React, { useState } from "react";
import { useSelector } from "react-redux";
// import PropTypes from "prop-types";
import "./../sass/components/navbar.scss";
import { selectDefaultUser } from "../features/users/usersSlice";
import Basket from "./Basket";

function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const [cartVisible, setcartVisible] = useState(false);
  const defaultUser = useSelector(selectDefaultUser);

  function toggleCart() {
    setcartVisible(!cartVisible);
  }

  return (
    <nav>
      <img src={"images/logo.svg"} alt="logo" />
      <div className="main-nav">
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="cart-profile">
        <img
          alt="cart logo"
          className="cart-logo"
          src={"images/icon-cart.svg"}
          onClick={toggleCart}
        />
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
