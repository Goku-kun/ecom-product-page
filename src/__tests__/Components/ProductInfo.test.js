import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import ProductInfo from "../../Components/ProductInfo";
import { setCurrentProduct } from "../../features/page/pageSlice";

test("expect product info component to render correctly", function () {
  store.dispatch(
    setCurrentProduct({
      companyName: "product company",
      name: "product name",
      description: "description about the product",
    })
  );
  render(
    <Provider store={store}>
      <ProductInfo />
    </Provider>
  );

  const productInfoDiv = screen.getByTestId(/productinfo-component-test/i);
  const productCompanyName = screen.getByText("product company".toUpperCase());
  const productName = screen.getByText("product name");
  const productDescription = screen.getByText("description about the product");
  expect(productInfoDiv).toBeInTheDocument();
  expect(productCompanyName).toBeInTheDocument();
  expect(productName).toBeInTheDocument();
  expect(productDescription).toBeInTheDocument();
});
