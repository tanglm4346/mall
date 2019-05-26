import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../reducer/Authorize.reduce";
import { Redirect } from "react-router-dom";
// import { Button } from "antd-mobile";

@connect(
  state => state.authorize,
  { login }
)
class Login extends Component {
  render() {
    return (
      <div>
        {this.props.isAuth ? <Redirect to="/dashBoard" /> : null}
        <button type="warning" onClick={this.props.login}>
          登陆
        </button>
      </div>
    );
  }
}

export default Login;
