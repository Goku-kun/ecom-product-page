import React from "react";
import { screen, render } from "@testing-library/react";
import Navbar from "../../Components/Navbar";
import { Provider } from "react-redux";
import store from "../../store";
import userEvent from "@testing-library/user-event";

test("expect navbar to be in the document", function () {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );

  const navbar = screen.getByTestId(/navbar-component-test/i);
  expect(navbar).toBeInTheDocument();
});

test("expect overlay to be visible when clicked on the hamburger button", function () {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );

  const overlayOpenButton = screen.getByTestId(/navbar-overlayopen-test#2/i);
  userEvent.click(overlayOpenButton);
  const overlay = screen.getByTestId(/navbar-overlay-test/i);
  expect(overlay).toHaveClass("main-nav-visible");
});

test("expect overlay to be closed when clicked on the X close button", function () {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );

  const overlayOpenButton = screen.getByTestId(/navbar-overlayopen-test#2/i);
  userEvent.click(overlayOpenButton);
  const overlay = screen.getByTestId(/navbar-overlay-test/i);
  expect(overlay).toHaveClass("main-nav-visible");
  const overlayCloseButton = screen.getByText("×");
  userEvent.click(overlayCloseButton);
  expect(overlay).not.toHaveClass("main-nav-visible");
  expect(overlay).toHaveClass("main-nav-hidden");
});
