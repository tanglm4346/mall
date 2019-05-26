import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Canstants from "./../support/constants";
import { getItem } from "./../support/storage";
const auth = (WrappedComponent, type) => {
  return class extends Component {
    render() {
      //判断登录
      //如果式已登录
      //是登录页
      //更具type分发
      const excludeUrl = ["/login", "/register"];
      console.log("props", this.props);
      if (excludeUrl.indexOf(this.props.location) > -1) {
        return <WrappedComponent {...this.props} />;
      } else {
        let user = getItem(Canstants.USER);
        console.info("user", user);
        let isAuth = user && user.username;
        if (!isAuth) {
          return <Redirect to="/login" />;
        } else if (type !== user.type) {
          return <Redirect to="/403" />;
        } else {
          return <WrappedComponent {...this.props} />;
        }
      }
    }
  };
};
export default auth;
