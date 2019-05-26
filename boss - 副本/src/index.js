import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import reduces from "./redux/reduces";

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Login from "./container/login/login";
import Register from "./container/register/register";
import BossInfo from "./container/boss/info";

import Forbidden from "./container/forbidden/forbidden";
import NotFound from "./container/404/404";
import auth from "./high/auth";

function Boss() {
  return <h1>这是boss页</h1>;
}
function Genius() {
  return <h1>这是Genius页</h1>;
}

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
        <Route path="/register" component={Register} />
        <Route path="/genius" exact component={auth(Genius, "genius")} />
        <Route path="/boss" exact component={auth(Boss, "boss")} />
        <Route path="/forbidden" component={Forbidden} />
        <Route path="/403" component={Forbidden} />
        <Route path="/404" component={NotFound} />
        <Route path="/boss/info" component={auth(BossInfo, "boss")} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
