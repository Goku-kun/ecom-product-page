import Basket from "../../Components/Basket";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "./../../store";

test("renders the Basket", function () {
  render(
    <Provider store={store}>
      <Basket isVisible={true} />
    </Provider>
  );
  const basketElement = screen.getByTestId(/basket-component-test/i);
  expect(basketElement).toBeInTheDocument();
  expect(basketElement).toHaveClass("basket-content-visible");
});

test("hides the basket element", function () {
  render(
    <Provider store={store}>
      <Basket isVisible={false} />
    </Provider>
  );
  const basketElement = screen.getByTestId(/basket-component-test/i);
  expect(basketElement).toBeInTheDocument();
  expect(basketElement).toHaveClass("basket-content-invisible");
});

test("expect basket to be empty", function () {
  render(
    <Provider store={store}>
      <Basket isVisible={true} />
    </Provider>
  );
  const basketEmpty = screen.getByText(/Your cart is empty./i);
  expect(basketEmpty).toBeInTheDocument();
  expect(basketEmpty).toHaveTextContent("Your cart is empty.");
});
