import React, { Component } from "react";
import {
  WhiteSpace,
  WingBlank,
  List,
  InputItem,
  Radio,
  Button
} from "antd-mobile";
import { connect } from "react-redux";
import { register } from "./../../redux/user.redux";
import Logo from "./../../component/logo/logo";

const RadioItem = Radio.RadioItem;
@connect(
  state => state.user,
  { register }
)
class Register extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      username: null,
      password: null,
      rePassword: null,
      type: "genius"
    };
  }
  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  handleRegister = () => {
    this.props.register(this.state);
  };
  render() {
    return (
      <div>
        <Logo />
        <WhiteSpace />
        <WingBlank>
          <List>
            <InputItem
              onChange={v => {
                this.handleChange("username", v);
              }}
            >
              用户名
            </InputItem>
            <InputItem
              onChange={v => {
                this.handleChange("password", v);
              }}
            >
              密码
            </InputItem>
            <InputItem
              onChange={v => {
                this.handleChange("rePassword", v);
              }}
            >
              确认密码
            </InputItem>
            <RadioItem
              checked={this.state.type === "genius"}
              onChange={() => {
                this.handleChange("type", "genius");
              }}
            >
              牛人
            </RadioItem>
            <RadioItem
              checked={this.state.type === "boss"}
              onChange={() => {
                this.handleChange("type", "boss");
              }}
            >
              boss
            </RadioItem>
          </List>
          <WhiteSpace />
          <Button
            type="primary"
            onClick={() => {
              this.handleRegister();
            }}
          >
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}
export default Register;
