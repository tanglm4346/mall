import React, { Component } from "react";
import { List } from "antd-mobile";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";

const Item = List.Item;

@withRouter
class UserList extends Component {
  static propTypes = {
    data: propTypes.array
  };
  handleClick = () => {
    console.info(this.props);
    this.props.history.push("/chat");
  };
  render() {
    console.info(this.props);
    return (
      <List>
        {this.props.data.map(item => {
          return item.avatar ? (
            <Item
              key={item.username}
              extra={item.title}
              thumb={require(`../../static/images/avatar/${item.avatar}.png`)}
              onClick={() => {
                this.props.history.push("/dashbroad/user/" + item.username);
              }}
            >
              {item.username}
            </Item>
          ) : null;
        })}
      </List>
    );
  }
}
export default UserList;
