import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addGun, delGun, addGunAsync } from "./../reducer/DashBoard.reduce";
import { logout } from "../reducer/Authorize.reduce";

@connect(
  state => {
    return { num: state.counter, ...state.authorize };
  },
  { addGun, delGun, addGunAsync, logout }
)
class DashBoard extends Component {
  render() {
    return (
      <div>
        {this.props.isAuth ? (
          <button onClick={this.props.logout}> 登出</button>
        ) : (
          <Redirect to="/login" />
        )}
        <h1>现有机关{this.props.num}</h1>
        <button onClick={this.props.addGun}> 申请武器</button>
        <button onClick={this.props.delGun}> 上交武器</button>
        <button onClick={this.props.addGunAsync}> 拖两天再交</button>
      </div>
    );
  }
}
export default DashBoard;
