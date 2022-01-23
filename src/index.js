import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App productId={"7rBqfIxeYN7zS6l0ovdX"} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
