import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import store from "./redux/state";

import "./index.css";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        {console.log(store)}
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
