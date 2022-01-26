import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import QuantitySelector from "../../Components/QuantitySelector";
import store from "../../store";

test("expect the QuantitySelector component to be rendered correctly", function () {
  render(
    <Provider store={store}>
      <QuantitySelector
        internalQuantityForQuantitySelector={0}
        setInternalQuantityForQuantitySelector={() => {}}
      />
    </Provider>
  );
  const internalQuantitySelector = screen.getByText("0");
  expect(internalQuantitySelector).toBeInTheDocument();
});
