import reducer, {
  addProductToBasket,
  removeProductFromBasket,
} from "../../features/basket/basketSlice";

test("expect the state to be initialized", function () {
  expect(reducer(undefined, {})).toEqual([]);
});

test("expect a product to be added", function () {
  const previousState = [];
  expect(
    reducer(previousState, addProductToBasket({ name: "", quantity: 1 }))
  ).toEqual([{ name: "", quantity: 1 }]);
});

test("expect a product to be removed from the basket", function () {
  const previousState = [{ name: "", quantity: 1, id: 0 }];
  expect(reducer(previousState, removeProductFromBasket({ id: 0 }))).toEqual(
    []
  );
});
