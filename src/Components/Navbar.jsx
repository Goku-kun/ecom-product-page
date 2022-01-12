import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./../sass/components/Navbar.scss";
import { selectDefaultUser } from "../features/users/usersSlice";
import Basket from "./Basket";
import {
  selectOverlayState,
  makeOverlayHidden,
  makeOverlayVisible,
  toggleCartVisibility,
  selectCartVisibilityState,
} from "../features/pages/pageSlice";

function Navbar() {
  const dispatch = useDispatch();
  const defaultUser = useSelector(selectDefaultUser);
  const isOverlayVisible = useSelector(selectOverlayState);
  const isCartVisible = useSelector(selectCartVisibilityState);

  return (
    <nav>
      <div
        className={isOverlayVisible ? "disable" : ""}
        onClick={() => dispatch(makeOverlayHidden())}
      />
      <button
        className="overlay-open-btn"
        onClick={() => dispatch(makeOverlayVisible())}
      >
        <img src="images/icon-menu.svg" alt="hamburger button icon" />
      </button>
      <img className="brand-logo" src={"images/logo.svg"} alt="logo" />
      <div
        className={`main-nav ${
          isOverlayVisible ? "main-nav-visible" : "main-nav-hidden"
        }`}
      >
        <button
          className="overlay-close-btn"
          onClick={() => dispatch(makeOverlayHidden())}
        >
          &times;
        </button>

        <div className="overlay-content">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="cart-profile">
        <button
          onClick={() => dispatch(toggleCartVisibility())}
          className="cart-button"
        >
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
        <Basket isVisible={isCartVisible} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
