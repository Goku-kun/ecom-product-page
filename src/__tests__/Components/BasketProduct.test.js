import React from "react";
import { screen, render, getNodeText } from "@testing-library/react";
import BasketProduct from "../../Components/BasketProduct";
import store from "../../store";
import { Provider } from "react-redux";
import Thumbnail from "./../../../public/images/image-product-1-thumbnail.jpg";
import { addProductToBasket } from "./../../features/basket/basketSlice";
import UserEvent from "@testing-library/user-event";

test("expect BasketProduct to render", function () {
  render(
    <Provider store={store}>
      <BasketProduct
        name="Autumn Sneaker"
        discount={50}
        productId={"0"}
        quantity={1}
        thumbnail={Thumbnail}
        unitPriceInUsd={250}
      />
    </Provider>
  );

  const basketproduct = screen.getByTestId("basketproduct-component-test");
  expect(basketproduct).toBeInTheDocument();
});

test("expect product name to have the correct value", function () {
  render(
    <Provider store={store}>
      <BasketProduct
        name="Autumn Sneaker"
        discount={50}
        productId={"0"}
        quantity={1}
        thumbnail={Thumbnail}
        unitPriceInUsd={250}
      />
    </Provider>
  );

  const productName = screen.getByText(/autumn sneaker/i);
  expect(productName).toBeInTheDocument();
  expect(productName).toHaveTextContent("Autumn Sneaker");
});

test("expect correct price to be calculated based on discount", function () {
  render(
    <Provider store={store}>
      <BasketProduct
        name="Autumn Sneaker"
        discount={60}
        productId={"0"}
        quantity={5}
        thumbnail={Thumbnail}
        unitPriceInUsd={250}
      />
    </Provider>
  );

  const productPrice = screen.getByTestId("basketproductprice-test");
  expect(getNodeText(productPrice).trim()).toBe("$100.00 x 5");
});

test("expect product to be removed from the basket by clicking delete button", function () {
  store.dispatch(
    addProductToBasket({
      productId: "0",
      companyName: "SNEAKER COMPANY",
      name: "Fall Limited Edition Sneakers",
      price: 250,
      discount: 60,
      maxQuantityAvailable: 10,
      thumbnailPictures: ["images/image-product-1-thumbnail.jpg"],
    })
  );
  const { rerender } = render(
    <Provider store={store}>
      {store.getState().basket.map((product) => (
        <BasketProduct
          name={product.name}
          discount={product.discount}
          productId={product.productId}
          quantity={product.quantity}
          thumbnail={product.thumbnailPictures[0]}
          unitPriceInUsd={product.price}
          key={"key"}
        />
      ))}
    </Provider>
  );

  const basketProduct = screen.getByTestId("basketproduct-component-test");
  const deleteButton = screen.getByTestId("basketproductdelete-test");
  UserEvent.click(deleteButton);

  // re render is necessary since it's not subscribed to the store to receive automatic updates so that dom needs to be rendered again to show that the element has been removed
  rerender(
    <Provider store={store}>
      {store.getState().basket.map((product) => (
        <BasketProduct
          name={product.name}
          discount={product.discount}
          productId={product.productId}
          quantity={product.quantity}
          thumbnail={product.thumbnailPictures[0]}
          unitPriceInUsd={product.price}
          key={"key"}
        />
      ))}
    </Provider>
  );
  expect(basketProduct).not.toBeInTheDocument();
});
