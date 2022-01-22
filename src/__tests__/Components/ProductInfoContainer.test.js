import React from "react";
import { screen, render } from "@testing-library/react";
import ProductInfoContainer from "../../Components/ProductInfoContainer";
import { Provider } from "react-redux";
import store from "../../store";

test("expect ProductInfo Container to render correctly", function () {
  render(
    <Provider store={store}>
      <ProductInfoContainer
        product={{
          companyName: "",
          name: "",
          description: "",
          price: 0,
          discount: 0,
        }}
      />
    </Provider>
  );
  const productInfoContainer = screen.getByTestId(//i)
});
