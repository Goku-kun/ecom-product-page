import React from "react";
import { screen, render } from "@testing-library/react";
import LightBox from "../../Components/LightBox";
import Slider from "../../Components/Slider";
import userEvent from "@testing-library/user-event";

test("expect LightBox to be in the document", function () {
  render(
    <LightBox images={[]} lightBoxState={true} setLightBoxState={() => {}} />
  );
  const lightBox = screen.getByTestId(/lightbox-component-test/i);
  expect(lightBox).toBeInTheDocument();
  expect(lightBox).toHaveClass("lightbox-visible");
});

test("expect LightBox to not be visible", function () {
  render(
    <LightBox images={[]} lightBoxState={false} setLightBoxState={() => {}} />
  );
  const lightBox = screen.getByTestId(/lightbox-component-test/i);
  expect(lightBox).toBeInTheDocument();
  expect(lightBox).toHaveClass("lightbox-invisible");
});

test("expect LightBox to be hidden when clicked on X button", function () {
  render(<Slider imagesArray={[]} />);

  const clickToMakeLightBoxVisible = screen.getByTestId(
    "lightbox-visibility-test"
  );
  userEvent.click(clickToMakeLightBoxVisible);
  const lightBox = screen.getByTestId(/lightbox-component-test/i);
  expect(lightBox).toHaveClass("lightbox-visible");
  const removeButton = screen.getByTestId(/lightbox-hide-test/i);
  userEvent.click(removeButton);
  expect(lightBox).toHaveClass("lightbox-invisible");
});
