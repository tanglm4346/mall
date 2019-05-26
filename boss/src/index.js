import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { createBrowserHistory } from "history";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect } from "react-router-dom";

import createRootReducer from "./redux/reduces";

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Login from "./container/login/login";
import Register from "./container/register/register";
import BossInfo from "./container/boss/info";
import GeniusInfo from "./container/genius/info";
import DashBroad from "./container/dashbroad/dashbroad";
import Chat from "./container/chat/chat";
import Forbidden from "./container/forbidden/forbidden";
import NotFound from "./container/404/404";
import auth from "./high/auth";
export const history = createBrowserHistory();

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__
  : () => {};

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history), thunk),
    reduxDevTools()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashbroad" component={auth(DashBroad)} />
        <Route path="/forbidden" component={Forbidden} />
        <Route path="/chat/:id" component={Chat} />
        <Route path="/403" component={Forbidden} />
        <Route path="/404" component={NotFound} />
        <Route path="/boss/info" component={auth(BossInfo, "boss")} />
        <Route path="/genius/info" component={auth(GeniusInfo, "genius")} />
        <Redirect to="/404" />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
