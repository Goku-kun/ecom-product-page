import React from "react";
import { screen, render, getNodeText } from "@testing-library/react";
import Price from "../../Components/Price";

test("expect Price component to be in the document", function () {
  render(<Price listPrice={250} percentOff={50} />);

  const priceComponent = screen.getByTestId(/price-component-test/i);
  expect(priceComponent).toBeInTheDocument();
});

test("expect price component to calculate correct price based on the discount", function () {
  render(<Price listPrice={250} percentOff={50} />);

  const discountedPrice = screen.getByTestId(/price-discounted-test/i);

  expect(getNodeText(discountedPrice).trim()).toBe("$125.00");
});
