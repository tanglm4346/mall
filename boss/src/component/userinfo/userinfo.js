import React, { Component } from "react";
import { List, Result, WhiteSpace } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;

export class userinfo extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        <Result
          title={this.props.user.username}
          message={this.props.user.company || ""}
          img={
            <img
              alt="头像"
              style={{ width: "100%" }}
              src={require(`../../static/images/avatar/${
                this.props.user.avatar
              }.png`)}
            />
          }
        />
        <List renderHeader="简介">
          <Item extra={this.props.user.title}>职位</Item>
          <Item extra={this.props.user.money}>薪资</Item>
          <Item>
            描述
            {this.props.user.desc.split("\n").map(item => {
              return <Brief key={item}>{item}</Brief>;
            })}
          </Item>
        </List>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

export default userinfo;
