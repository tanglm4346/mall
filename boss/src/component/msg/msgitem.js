import React, { Component } from "react";
import "./less/msgitem.less";

export default class MsgItem extends Component {
  render() {
    return (
      <div className={`msg-box ${this.props.position}`}>
        <div>
          <img alt="头像" src={require("../../static/images/avatar/boy.png")} />
        </div>
        <div className="content-box">
          <div className="arrow" />
          <div className="name">{this.props.username}</div>
          <div className="content">{this.props.content}</div>
        </div>
      </div>
    );
  }
}
