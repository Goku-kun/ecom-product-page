import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Slider from "../../Components/Slider";
import { setCurrentProduct } from "../../features/page/pageSlice";

test("expect the slider to be rendered correctly", function () {
  store.dispatch(
    setCurrentProduct({
      productId: "productID",
      displayPictures: [],
    })
  );

  render(
    <Provider store={store}>
      <Slider />
    </Provider>
  );
  const sliderComponent = screen.getByTestId(/slider-component-test/i);
  expect(sliderComponent).toBeInTheDocument();
});
