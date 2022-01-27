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
} from "../features/page/pageSlice";
import { selectTotalProductCountInTheBasket } from "../features/basket/basketSlice";

function Navbar() {
  const dispatch = useDispatch();
  const defaultUser = useSelector(selectDefaultUser);
  const isOverlayVisible = useSelector(selectOverlayState);
  const isCartVisible = useSelector(selectCartVisibilityState);
  const totalProductsInBasketCount = useSelector(
    selectTotalProductCountInTheBasket
  );

  return (
    <>
      <div
        className={isOverlayVisible ? "disable" : ""}
        onClick={() => dispatch(makeOverlayHidden())}
      />
      <nav data-testid="navbar-component-test">
        <button
          className="overlay-open-btn"
          onClick={() => dispatch(makeOverlayVisible())}
          data-testid="navbar-overlayopen-test#2"
        >
          <img src="images/icon-menu.svg" alt="hamburger button icon" />
        </button>
        <img className="brand-logo" src={"images/logo.svg"} alt="logo" />
        <div
          className={`main-nav ${
            isOverlayVisible ? "main-nav-visible" : "main-nav-hidden"
          }`}
          data-testid="navbar-overlay-test"
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
            <div
              className={`cart-counter ${
                totalProductsInBasketCount !== 0 ? "cart-counter-visible" : ""
              }`}
            >
              {totalProductsInBasketCount}
            </div>
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
    </>
  );
}

export default Navbar;
