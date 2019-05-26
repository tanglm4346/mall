import React, { Component } from "react";
import logoImg from "./image/job.png";
import "./less/logo.less";

export default class logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={logoImg} alt="这是logo" />
      </div>
    );
  }
}
