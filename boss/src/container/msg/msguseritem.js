import React, { Component } from "react";
import Constants from "../../support/constants";
import axios from "axios";
import { List, Badge } from "antd-mobile";
import { withRouter } from "react-router-dom";

const Item = List.Item;
const Brief = Item.Brief;
@withRouter
class MsgUserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatUser: {
        username: null,
        avatar: null
      }
    };
  }

  componentDidMount() {
    let { userId } = this.props;
    axios
      .get(Constants.URL_PREFIX + "/user/info?id=" + userId)
      .then(response => {
        if (response.data.code === 1) {
          this.setState({
            chatUser: response.data.data
          });
        }
      });
  }
  render() {
    let { unread, lastContent, userId } = this.props;
    let msgUserItem = this.state.chatUser.avatar ? (
      <Item
        thumb={require(`../../static/images/avatar/${
          this.state.chatUser.avatar
        }.png`)}
        extra={<Badge text={unread} />}
        onClick={() => {
          this.props.history.push(`/chat/${userId}`);
        }}
      >
        {this.state.chatUser.username}
        <Brief>{lastContent}</Brief>
      </Item>
    ) : null;
    return msgUserItem;
  }
}

export default MsgUserItem;
