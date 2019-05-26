import React, { Component } from "react";
import { List } from "antd-mobile";
import { connect } from "react-redux";
import { getItem } from "../../support/storage";
import Constants from "../../support/constants";
import MsgUserItem from "./msguseritem";

@connect(state => state.chatMsg)
class Msg extends Component {
  render() {
    console.log(this.props.msgList);
    let me = getItem(Constants.USER)._id;
    let msgGroup = {};
    this.props.msgList.map(item => {
      let you = item.to === me ? item.from : item.to;
      if (msgGroup[you]) {
        msgGroup[you].push(item);
      } else {
        msgGroup[you] = [item];
      }
    });
    console.log("msgGroup", msgGroup);
    console.log("msgGroup", Object.values(msgGroup));

    return (
      <div>
        <List>
          {Object.keys(msgGroup)
            .sort((key1, key2) => {
              console.log("key1", key1, "key2", key2);
              let lastUnread1 = msgGroup[key1].filter(v => !v.read);
              let lastTime1 = 0;
              if (lastUnread1 && lastUnread1.length > 0) {
                lastTime1 = lastUnread1[lastUnread1.length - 1].createTime;
              }
              let lastUnread2 = msgGroup[key2].filter(v => !v.read);
              let lastTime2 = 0;
              if (lastUnread2 && lastUnread2.length > 0) {
                lastTime2 = lastUnread2[lastUnread2.length - 1].createTime;
              }
              console.log("lastTime2", lastTime2, "lastTime1", lastTime1);
              return lastTime2 - lastTime1;
            })
            .map(key => {
              let item = msgGroup[key];
              let you = item[0].to === me ? item[0].from : item[0].to;
              let lastMsg = item[item.length - 1];
              let unread = item.filter(v => v.to === me && !v.read).length;
              return (
                <MsgUserItem
                  key={you}
                  userId={you}
                  lastContent={lastMsg.content}
                  unread={unread}
                />
              );
            })}
        </List>
        ;
      </div>
    );
  }
}

export default Msg;
