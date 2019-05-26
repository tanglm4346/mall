import React, { Component } from "react";
import { Accordion, List, Grid } from "antd-mobile";
import "./less/selector.less";

export default class AvatarSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: {
        icon: null,
        text: null
      }
    };
  }
  handleClick = item => {
    this.setState({
      avatar: item
    });
  };
  render() {
    const avatarList = "boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra"
      .split(",")
      .map(item => {
        return {
          icon: require(`../../static/images/avatar/${item}.png`),
          text: item
        };
      });
    const accordionTile = this.state.avatar.icon ? (
      <div className="avatar-header">
        <span>头像</span>&nbsp;&nbsp;&nbsp;
        <img src={this.state.avatar.icon} alt={this.state.avatar.text} />
      </div>
    ) : (
      <div>
        <span>选择头像</span>
      </div>
    );

    return (
      <div>
        <Accordion accordion>
          <Accordion.Panel header={accordionTile}>
            <List>
              <Grid
                data={avatarList}
                activeStyle={false}
                columnNum={5}
                onClick={item => {
                  this.handleClick(item);
                  this.props.onChange(item.text);
                }}
              />
            </List>
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}
