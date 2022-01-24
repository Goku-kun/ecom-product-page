import React from "react";
import { screen, render } from "@testing-library/react";
import SliderThumbnail from "../../Components/SliderThumbnail";

test("expect the slider thumbnail component to render correctly", function () {
  render(
    <SliderThumbnail
      currentThumbnailActive={0}
      images={[]}
      onClickThumbnail={() => {}}
    />
  );
  const sliderThumnail = screen.getByTestId(/sliderthumbnail-component-test/i);
  expect(sliderThumnail).toBeInTheDocument();
});
