import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { user } from "./user.redux";
import { chatMsg } from "./chat.redux";

export default history =>
  combineReducers({ router: connectRouter(history), user, chatMsg });
