import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import store from "../../store";
import LightBox from "../../Components/LightBox";
import Slider from "../../Components/Slider";
import { setCurrentProduct } from "../../features/page/pageSlice";

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

test("expect LightBox to be hidden when clicked on X button", async function () {
  store.dispatch(setCurrentProduct({ displayPictures: [] }));

  render(
    <Provider store={store}>
      <Slider />
    </Provider>
  );

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
