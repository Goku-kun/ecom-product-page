import reducer, { setUser } from "../../features/users/usersSlice";

test("expect the user state to be initialized", function () {
  expect(reducer(undefined, {})).toEqual({
    id: 0,
    name: "Default User",
    displayPicture: "images/image-avatar.png",
  });
});

test("expect another user to be set", function () {
  const previousState = {
    id: 0,
    name: "Default User",
    displayPicture: "images/image-avatar.png",
  };
  expect(
    reducer(
      previousState,
      setUser({ id: 1, name: "another user", displayPicture: "picture.png" })
    )
  ).toEqual({ id: 1, name: "another user", displayPicture: "picture.png" });
});
