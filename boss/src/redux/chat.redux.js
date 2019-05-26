import axios from "axios";
import Constants from "../support/constants";
import { getItem } from "./../support/storage";
import io from "socket.io-client";
import { Toast } from "antd-mobile";

const MSG_LIST = "MSG_LIST";
const MSG_RECEIVE = "MSG_RECEIVE";
const MSG_READ = "MSG_READ";
const API = Constants.URL_PREFIX;

const socket = io("ws://192.168.0.100:9093");

const initState = {
  msgList: [],
  unread: 0
};

export function chatMsg(state = initState, action) {
  switch (action.type) {
    case MSG_LIST:
      return {
        ...state,
        msgList: action.payload,
        unread: action.payload.filter(
          item => item.to === getItem(Constants.USER)._id && !item.read
        ).length
      };
    case MSG_RECEIVE:
      console.log("payload", action.payload);
      return {
        ...state,
        msgList: [...state.msgList, action.payload],
        unread:
          action.payload.to === getItem(Constants.USER)._id
            ? state.unread + 1
            : state.unread
      };
    case MSG_READ:
      return { ...state };
    default:
      return state;
  }
}

export function getMsgList() {
  let to = getItem(Constants.USER)._id;
  return dispatch => {
    axios.get(API + "/chat/list", { params: { to } }).then(res => {
      console.log(res);
      if (res.status === 200 && res.data.code === "1") {
        dispatch({ type: MSG_LIST, payload: res.data.data });
      } else {
        Toast.fail("加载失败");
      }
    });
  };
}

export function sendMsg({ to, msg }) {
  return dispatch => {
    let from = getItem(Constants.USER)._id;
    socket.emit("send", { to, from, msg });
  };
}
export function receiveMsg() {
  console.log("开始接收信息");
  return dispatch => {
    socket.on("receive", data => {
      console.log("receiveMsg", data);
      dispatch({ type: MSG_RECEIVE, payload: data });
    });
  };
}
export function readMsg({ from }) {
  return dispatch => {
    let to = getItem(Constants.USER)._id;
    axios.post(API + "/chat/read", { to, from }).then(res => {
      console.log(res);
      if (res.status === 200 && res.data.code === "1") {
        dispatch({ type: MSG_LIST, payload: res.data.data });
      } else {
        Toast.fail("加载失败");
      }
    });
  };
}
