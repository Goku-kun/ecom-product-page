import React from "react";
import { screen, render } from "@testing-library/react";
import SecondaryButton from "../../Components/SecondaryButton";

test("expect SecondaryButton to be rendered", function () {
  render(
    <SecondaryButton disabled={false} onClick={() => {}}>
      +
    </SecondaryButton>
  );

  const secondaryButton = screen.getByText("+");
  expect(secondaryButton).toBeInTheDocument();
});

test("expect SecondaryButton to be disabled", function () {
  render(
    <SecondaryButton disabled={true} onClick={() => {}}>
      +
    </SecondaryButton>
  );

  const secondaryButton = screen.getByText("+");
  expect(secondaryButton).toBeInTheDocument();
  expect(secondaryButton).toBeDisabled();
});
