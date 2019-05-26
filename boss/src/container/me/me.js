import React, { Component } from "react";
import { Button, Modal } from "antd-mobile";
import { connect } from "react-redux";
import UserInfo from "../../component/userinfo/userinfo";
import Contants from "../../support/constants";
import { getItem } from "./../../support/storage";
import { logout } from "../../redux/user.redux";

@connect(
  null,
  { logout }
)
class Me extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: getItem(Contants.USER)
    };
  }

  handleLogout = () => {
    Modal.alert("提示", "确定退出吗？", [
      { text: "取消", onPress: () => {} },
      {
        text: "确定",
        onPress: () => {
          this.props.logout();
        }
      }
    ]);
  };
  render() {
    return (
      <div>
        <UserInfo user={this.state.user} />
        <Button onClick={this.handleLogout}>退出登录</Button>
      </div>
    );
  }
}

export default Me;
