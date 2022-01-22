import React from "react";
import { screen, render } from "@testing-library/react";
import ProductInfo from "../../Components/ProductInfo";

test("expect product info component to render correctly", function () {
  render(
    <ProductInfo
      product={{
        companyName: "product company",
        name: "product name",
        description: "description about the product",
      }}
    />
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
