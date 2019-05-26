import React, { Component } from "react";
import { connect } from "react-redux";
import AvatarSelector from "../../component/avatar/selector.js";
import {
  NavBar,
  WhiteSpace,
  List,
  InputItem,
  Button,
  TextareaItem
} from "antd-mobile";
import { updateInfo } from "../../redux/user.redux";

@connect(
  null,
  { updateInfo }
)
class BossInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: null,
      desc: null,
      title: null,
      company: null,
      money: null
    };
  }
  handleAvatarChange = avatar => {
    this.setState({
      avatar: avatar
    });
  };
  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  handleSubmit = () => {
    this.props.updateInfo(this.state);
  };
  render() {
    return (
      <div>
        <NavBar>Boss信息</NavBar>
        <WhiteSpace />
        <List>
          <AvatarSelector onChange={this.handleAvatarChange} />
          <InputItem onChange={v => this.handleChange("title", v)}>
            招聘职位
          </InputItem>
          <InputItem onChange={v => this.handleChange("company", v)}>
            公司名称
          </InputItem>
          <InputItem onChange={v => this.handleChange("money", v)}>
            职位薪资
          </InputItem>
          <TextareaItem
            onChange={v => this.handleChange("desc", v)}
            rows={5}
            title="职位要求"
          />
        </List>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />

        <Button type="primary" onClick={() => this.handleSubmit()}>
          保存
        </Button>
      </div>
    );
  }
}
export default BossInfo;
