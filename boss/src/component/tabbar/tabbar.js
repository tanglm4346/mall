import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
@withRouter
class Footer extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      active: props.location.pathname
    };
  }

  render() {
    console.log("navList", this.props);
    let items = this.props.navList.map(item => {
      return (
        <TabBar.Item
          badge={item.unread || 0}
          key={item.text}
          title={item.text}
          icon={{ uri: require(`./img/${item.icon}.png`) }}
          selectedIcon={{ uri: require(`./img/${item.icon}-active.png`) }}
          selected={this.state.active === item.path}
          onPress={() => {
            this.setState({
              active: item.path
            });
            this.props.history.push(item.path);
          }}
        />
      );
    });
    return (
      <div style={{ position: "fixed", width: "100%", bottom: 0 }}>
        <TabBar>{items}</TabBar>
      </div>
    );
  }
}
export default Footer;
