import React, { Component } from "react";
import { NavBar, Icon, InputItem } from "antd-mobile";
import { getItem } from "../../support/storage";
import Constants from "./../../support/constants";
import { connect } from "react-redux";
import {
  getMsgList,
  sendMsg,
  receiveMsg,
  readMsg
} from "./../../redux/chat.redux";
import MsgItem from "../../component/msg/msgitem";
import axios from "axios";

import "./less/chat.less";

@connect(
  state => state.chatMsg,
  { getMsgList, sendMsg, receiveMsg, readMsg }
)
class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatUser: {
        username: null
      },
      text: ""
    };
  }

  componentDidMount() {
    if (this.props.msgList.length === 0) {
      this.props.receiveMsg();
      this.props.getMsgList();
    }
    let { id } = this.props.match.params;
    axios.get(Constants.URL_PREFIX + "/user/info?id=" + id).then(response => {
      if (response.data.code === 1) {
        this.setState({
          chatUser: response.data.data
        });
      }
    });
  }

  componentWillUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }
  componentWillUnmount() {
    let from = this.props.match.params.id;
    this.props.readMsg({ from });
  }
  handChange = v => {
    this.setState({
      text: v
    });
  };
  handleSend = () => {
    if (this.state.text) {
      let to = this.props.match.params.id;
      this.props.sendMsg({ to, msg: this.state.text });
      this.setState({
        text: ""
      });
    }
  };
  render() {
    console.log("msgList", this.props.msgList);
    let from = this.props.match.params.id;
    let to = getItem(Constants.USER)._id;
    console.log(to, from);
    let msgList = this.props.msgList.filter(
      item =>
        (item.to === to && item.from === from) ||
        (item.to === from && item.from === to)
    );
    console.log("msgList", msgList);
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
        >
          {this.state.chatUser.username}
        </NavBar>
        <div style={{ paddingBottom: 60 }}>
          {msgList.map(item => {
            let username = this.state.chatUser.username;
            let position = "left";
            if (item.from === getItem(Constants.USER)._id) {
              username = getItem(Constants.USER).username;
              position = "right";
            }
            return (
              <MsgItem
                content={item.content}
                username={username}
                position={position}
                key={item._id}
              />
            );
          })}
        </div>
        <div className="footer">
          <InputItem
            placeholder="请输入"
            value={this.state.text}
            onChange={v => this.handChange(v)}
            extra={<span>发送</span>}
            onExtraClick={this.handleSend}
          />
        </div>
      </div>
    );
  }
}

export default Chat;
