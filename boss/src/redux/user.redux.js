/*认证登录相关的reduce*/
import axios from "axios";
import { getRedirectPath } from "./../support/utils";
import { setItem, getItem } from "./../support/storage";
import { Toast } from "antd-mobile";
import Constants from "../support/constants";
import { push } from "connected-react-router";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";
const ERROR = "ERROR";
const UPDATE = "UPDATE";
const API = Constants.URL_PREFIX;

const initState = {
  username: null,
  type: null,
  avatar: null,
  desc: null,
  title: null,
  company: null,
  money: null,
  msg: null
};

export function user(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload
      };
    case REGISTER:
      return { ...state };
    case LOGOUT:
      return initState;
    case UPDATE:
      return {
        ...state,
        ...action.payload
      };
    case ERROR:
      return { ...state, msg: action.payload.msg };
    default:
      return state;
  }
}
function error(msg) {
  Toast.fail(msg);
  return { type: ERROR, payload: { msg: msg } };
}

export function register({ username, password, rePassword, type }) {
  if (!username) {
    return error("用户名为空");
  } else if (!password) {
    return error("密码为空");
  } else if (password.length < 6) {
    return error("密码不得少于6位");
  } else if (!rePassword) {
    return error("确认密码为空");
  } else if (password !== rePassword) {
    return error("两次密码不一致");
  }
  return dispatch => {
    axios
      .post(API + "/user/register", { username, password, type })
      .then(response => {
        console.info(response);
        if (response.status === 200) {
          if (response.data.code === "1") {
            dispatch(push("/login"));
            dispatch({ type: REGISTER });
          } else {
            dispatch(error(response.data.msg));
          }
        }
      });
  };
}
export function login({ username, password }) {
  if (!username) {
    return error("用户名为空");
  } else if (!password) {
    return error("密码为空");
  }
  return dispatch => {
    axios.post(API + "/user/login", { username, password }).then(response => {
      console.info("response", response);
      if (response.status === 200) {
        if (response.data.code === "1") {
          setItem(Constants.USER, response.data.data);
          dispatch(push(getRedirectPath()));
          dispatch({ type: LOGIN, payload: response.data.data });
        } else {
          dispatch(error(response.data.msg));
        }
      }
    });
  };
}
export function updateInfo(info) {
  let user = getItem(Constants.USER);
  if (!info.avatar) {
    return error("头像为空");
  } else if (!info.title) {
    return error("职位为空");
  } else if (!info.desc) {
    return error("简介为空");
  }
  let params = {
    username: user.username,
    ...info
  };
  return dispatch => {
    axios.post(API + "/user/update", params).then(response => {
      console.info("response", response);
      if (response.status === 200) {
        if (response.data.code === "1") {
          let user = getItem(Constants.USER);
          setItem(Constants.USER, { ...user, ...info });
          dispatch(push(getRedirectPath()));
          dispatch({ type: UPDATE, payload: { ...user, ...info } });
        } else {
          dispatch(error(response.data.msg));
        }
      }
    });
  };
}
export function logout() {
  sessionStorage.removeItem(Constants.USER);
  return dispatch => {
    dispatch(push("/login"));
    dispatch({ type: LOGOUT });
  };
}
