import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const reducerLol = (state: any, action: any) => {
  const { type = "LOL" } = action;

  console.log("action", action, state);
  if (type === "LOL") {
    return { ...state, lol: true };
  } else {
    return { ...state, lol: false };
  }
};

const store = createStore(combineReducers({ lolState: reducerLol }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
