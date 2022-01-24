import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import ProductPage from "../../Components/ProductPage";
import { setCurrentProduct } from "../../features/page/pageSlice";

test("expect Product Page component to render correctly", function () {
  store.dispatch(
    setCurrentProduct({
      name: "",
      companyName: "",
      description: "",
      price: 0,
      discount: 0,
      displayPictures: [],
    })
  );
  render(
    <Provider store={store}>
      <ProductPage />
    </Provider>
  );
  const productPage = screen.getByTestId(/productpage-component-test/i);
  expect(productPage).toBeInTheDocument();
});
