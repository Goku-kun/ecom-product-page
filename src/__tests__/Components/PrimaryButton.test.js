import React from "react";
import { screen, render } from "@testing-library/react";
import PrimaryButton from "../../Components/PrimaryButton";

test("expect Primary Button component to render with correct information and class type", function () {
  render(
    <PrimaryButton handleClick={() => {}} width="100%" type="random-class">
      Checkout
    </PrimaryButton>
  );

  const button = screen.getByText(/Checkout/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Checkout");
  expect(button).toHaveClass("random-class");
});
