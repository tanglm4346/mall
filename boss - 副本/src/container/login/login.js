import React, { Component } from "react";
import { List, InputItem, Button, WhiteSpace, WingBlank } from "antd-mobile";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getRedirectPath } from "../../support/utils";

import Logo from "./../../component/logo/logo";

import { login } from "../../redux/user.redux";

import "./less/login.less";

@connect(
  state => state.user,
  { login }
)
class Login extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      username: null,
      password: null
    };
  }
  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  handleLogin = () => {
    this.props.login(this.state);
  };
  render() {
    let path = getRedirectPath();
    return (
      <div>
        {path === "/login" ? null : <Redirect to={path} />}
        <Logo />
        <WhiteSpace />
        <WingBlank>
          <List>
            <InputItem
              placeholder="请输入用户名"
              value={this.state.username}
              onChange={v => {
                this.handleChange("username", v);
              }}
            >
              用户名
            </InputItem>
            <InputItem
              placeholder="请输入用户名"
              value={this.state.password}
              onChange={v => {
                this.handleChange("password", v);
              }}
            >
              密码
            </InputItem>
          </List>
          <WhiteSpace size="xl" />
          <div>
            <Button
              type="primary"
              onClick={() => {
                this.handleLogin();
              }}
            >
              登录
            </Button>
          </div>
        </WingBlank>
        <WhiteSpace size="xl" />
        <div className="register-link-box">
          <Link to="/register">注册用户</Link>
        </div>
      </div>
    );
  }
}
export default Login;
