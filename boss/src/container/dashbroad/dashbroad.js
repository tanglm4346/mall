import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { NavBar } from "antd-mobile";
import { connect } from "react-redux";
import Footer from "../../component/tabbar/tabbar";
import { getItem } from "../../support/storage";
import Contants from "../../support/constants";
import Boss from "./../boss/boss";
import Genius from "./../genius/genius";
import User from "./../user/user";
import Me from "./../me/me";
import Msg from "./../msg/msg";
import { getMsgList, receiveMsg } from "./../../redux/chat.redux";

const URL_GENIUS = Contants.ROUTER_PREFIX_DASHBROAD + "/genius";
const URL_BOSS = Contants.ROUTER_PREFIX_DASHBROAD + "/boss";

@connect(
  state => state,
  { getMsgList, receiveMsg }
)
class DashBroad extends Component {
  componentDidMount() {
    if (this.props.chatMsg.msgList.length === 0) {
      this.props.receiveMsg();
      this.props.getMsgList();
    }
  }
  render() {
    let user = getItem(Contants.USER);

    const navList = [
      {
        path: URL_GENIUS,
        title: "Boss列表",
        text: "boss",
        icon: "boss",
        rootUrl: URL_GENIUS,
        component: Boss,
        show: user.type === "genius"
      },
      {
        path: URL_BOSS,
        title: "牛人列表",
        text: "牛人",
        icon: "job",
        component: Genius,
        rootUrl: URL_BOSS,
        show: user.type === "boss"
      },
      {
        path: Contants.ROUTER_PREFIX_DASHBROAD + "/msg",
        title: "消息",
        text: "消息",
        icon: "msg",
        component: Msg,
        rootUrl: Contants.ROUTER_PREFIX_DASHBROAD + "/msg",
        show: true,
        unread: this.props.chatMsg.unread
      },
      {
        path: Contants.ROUTER_PREFIX_DASHBROAD + "/me",
        title: "个人中心",
        text: "个人中心",
        icon: "user",
        rootUrl: Contants.ROUTER_PREFIX_DASHBROAD + "/me",
        component: Me,
        show: true
      },
      {
        path: Contants.ROUTER_PREFIX_DASHBROAD + "/user/:name",
        title: "用户信息",
        rootUrl: Contants.ROUTER_PREFIX_DASHBROAD + "/user/",
        component: User,
        show: false
      }
    ];
    let activeNavList = navList.filter(item => item.show);
    console.log("DashBroad", this.props);
    return (
      <div>
        <div>
          <NavBar mode="dark">
            {
              navList.find(item => {
                return this.props.location.pathname.indexOf(item.rootUrl) === 0;
              }).title
            }
          </NavBar>
        </div>

        <div>
          <Switch>
            {navList.map(item => (
              <Route
                path={item.path}
                component={item.component}
                key={item.path}
              />
            ))}
          </Switch>
        </div>
        <div>
          <Footer navList={activeNavList} />
        </div>
      </div>
    );
  }
}
export default DashBroad;
