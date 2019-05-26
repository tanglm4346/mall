import React, { Component } from "react";
import { Button } from "antd-mobile";
import Constants from "../../support/constants";
import UserInfo from "../../component/userinfo/userinfo";
import axios from "axios";
export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentWillMount() {
    let { name } = this.props.match.params;
    axios
      .get(Constants.URL_PREFIX + "/user/info?username=" + name)
      .then(response => {
        if (response.data.code === 1) {
          this.setState({
            user: response.data.data
          });
        }
      });
  }
  handleClick = () => {
    this.props.history.push("/chat/" + this.state.user._id);
  };
  render() {
    console.log("User props", this.props);
    return (
      <div>
        {this.state.user ? <UserInfo user={this.state.user} /> : null}

        <Button type="primary" onClick={this.handleClick}>
          和他聊天
        </Button>
      </div>
    );
  }
}

export default User;
