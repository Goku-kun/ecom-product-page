import reducer from "../../features/products/productsSlice";

test("expect products slice state to be initialized correctly", function () {
  expect(reducer(undefined, {})).toEqual({
    isFetching: true,
    fetchingError: false,
    allProducts: {},
  });
});

test("expect the product to be fetched using productId", async function () {
  const fetchProductById = jest.fn(function () {
    return Promise.resolve({ name: "product name", companyName: "company" });
  });

  const response = await fetchProductById("product-id");
  expect(response).toEqual({
    name: "product name",
    companyName: "company",
  });
});
