import reducer, {
  makeOverlayVisible,
  makeOverlayHidden,
  toggleCartVisibility,
  setCurrentProduct,
  setCurrentProductId,
} from "../../features/page/pageSlice";

test("expect the page state to be initialized", function () {
  expect(reducer(undefined, {})).toEqual({
    isOverlayVisible: false,
    isCartVisible: false,
    currentProductId: 0,
    currentProduct: {},
  });
});

test("expect the overlay to be made visible", function () {
  const previousState = {
    isOverlayVisible: false,
    isCartVisible: false,
    currentProductId: 0,
    currentProduct: {},
  };
  expect(reducer(previousState, makeOverlayVisible())).toEqual({
    isOverlayVisible: true,
    isCartVisible: false,
    currentProductId: 0,
    currentProduct: {},
  });
});

test("expect the overlay to be hidden", function () {
  const previousState = {
    isOverlayVisible: false,
    isCartVisible: false,
    currentProductId: 0,
    currentProduct: {},
  };
  expect(reducer(previousState, makeOverlayHidden())).toEqual({
    isOverlayVisible: false,
    isCartVisible: false,
    currentProductId: 0,
    currentProduct: {},
  });
});

test("expect the cart to be visible", function () {
  const previousState = {
    isOverlayVisible: false,
    isCartVisible: false,
    currentProductId: 0,
    currentProduct: {},
  };
  expect(reducer(previousState, toggleCartVisibility())).toEqual({
    isOverlayVisible: false,
    isCartVisible: true,
    currentProductId: 0,
    currentProduct: {},
  });
});

test("expect the cart to be hidden", function () {
  const previousState = {
    isOverlayVisible: false,
    isCartVisible: true,
    currentProductId: 0,
    currentProduct: {},
  };
  expect(reducer(previousState, toggleCartVisibility())).toEqual({
    isOverlayVisible: false,
    isCartVisible: false,
    currentProductId: 0,
    currentProduct: {},
  });
});

test("expect the productId to be set correctly", function () {
  const previousState = {
    isOverlayVisible: false,
    isCartVisible: false,
    currentProductId: 0,
    currentProduct: {},
  };
  expect(reducer(previousState, setCurrentProductId("123abc"))).toEqual({
    isOverlayVisible: false,
    isCartVisible: false,
    currentProductId: "123abc",
    currentProduct: {},
  });
});

test("expect the currentProduct to be set correctly", function () {
  const previousState = {
    isOverlayVisible: false,
    isCartVisible: false,
    currentProductId: 0,
    currentProduct: {},
  };
  expect(
    reducer(
      previousState,
      setCurrentProduct({ name: "product", description: "this is a product" })
    )
  ).toEqual({
    isOverlayVisible: false,
    isCartVisible: false,
    currentProductId: 0,
    currentProduct: { name: "product", description: "this is a product" },
  });
});
