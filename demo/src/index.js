import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduces from "./reducer";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Login from "./component/Login";
import DashBoard from "./component/DashBoard";

const reduxDevTools = window.devToolsExtension
  ? window.devToolsExtension
  : () => {};

const store = createStore(
  reduces,
  compose(
    applyMiddleware(thunk),
    reduxDevTools()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashBoard" component={DashBoard} />
        <Redirect to="/dashBoard" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
