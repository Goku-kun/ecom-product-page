import React from "react";
import { screen, render, getNodeText } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Price from "../../Components/Price";
import { setCurrentProduct } from "../../features/page/pageSlice";

test("expect Price component to be in the document", function () {
  store.dispatch(
    setCurrentProduct({ price: 250, discount: 50, productId: "0" })
  );
  render(
    <Provider store={store}>
      <Price />
    </Provider>
  );

  const priceComponent = screen.getByTestId(/price-component-test/i);
  expect(priceComponent).toBeInTheDocument();
});

test("expect price component to calculate correct price based on the discount", function () {
  store.dispatch(setCurrentProduct({ price: 250, discount: 50 }));
  render(
    <Provider store={store}>
      <Price />
    </Provider>
  );

  const discountedPrice = screen.getByTestId(/price-discounted-test/i);

  expect(getNodeText(discountedPrice).trim()).toBe("$125.00");
});
