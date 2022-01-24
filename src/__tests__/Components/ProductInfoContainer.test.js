import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import ProductInfoContainer from "../../Components/ProductInfoContainer";
import { Provider } from "react-redux";
import store from "../../store";
import { setCurrentProduct } from "../../features/page/pageSlice";
import userEvent from "@testing-library/user-event";

test("expect ProductInfo Container to render correctly", function () {
  store.dispatch(
    setCurrentProduct({
      companyName: "",
      name: "",
      description: "",
      price: 0,
      discount: 0,
      maxQuantityAvailable: 10,
    })
  );

  render(
    <Provider store={store}>
      <ProductInfoContainer />
    </Provider>
  );
  const productInfoContainer = screen.getByTestId(
    /productinfocontainer-component-test/i
  );
  expect(productInfoContainer).toBeInTheDocument();
});

test("expect the product quantity to increase by clicking + ", function () {
  render(
    <Provider store={store}>
      <ProductInfoContainer />
    </Provider>
  );
  const selectIncrementButton = screen.getByText("+");
  const selectCounterDisplayValue = screen.getByText("0");
  userEvent.click(selectIncrementButton);
  waitFor(() => {
    expect(selectCounterDisplayValue).toBe(1);
  });
});

test("expect the product quantity to decrease by clicking -", function () {
  render(
    <Provider store={store}>
      <ProductInfoContainer />
    </Provider>
  );
  const selectIncrementButton = screen.getByText("+");
  const selectCounterDisplayValue = screen.getByText("0");
  userEvent.click(selectIncrementButton);

  const selectDecrementButton = screen.getByText("-");
  userEvent.click(selectDecrementButton);
  waitFor(() => {
    expect(selectCounterDisplayValue).toBe(0);
  });
});

test("expect the product to be added to cart after clicking the checkout button", function () {
  store.dispatch(
    setCurrentProduct({
      companyName: "",
      name: "",
      description: "",
      price: 0,
      discount: 0,
      maxQuantityAvailable: 10,
    })
  );
  render(
    <Provider store={store}>
      <ProductInfoContainer />
    </Provider>
  );
  const checkoutButton = screen.getByText("Add to cart");
  const selectIncrementButton = screen.getByText("+");
  userEvent.click(selectIncrementButton);
  userEvent.click(checkoutButton);

  const basket = store.getState().basket;
  expect(basket).toEqual([
    {
      companyName: "",
      name: "",
      description: "",
      price: 0,
      discount: 0,
      maxQuantityAvailable: 10,
      quantity: 1,
    },
  ]);
});
