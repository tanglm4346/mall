import { combineReducers } from "redux";

import { authorize } from "./Authorize.reduce";
import { counter } from "./DashBoard.reduce.js";

export default combineReducers({ authorize, counter });
