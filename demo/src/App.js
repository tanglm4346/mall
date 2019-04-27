import React, { Component } from "react";
import { connect } from "react-redux";
import { addGun, delGun, addGunAsync } from "./app.reduce";

@connect(
  state => {
    return { num: state };
  },
  { addGun, delGun, addGunAsync }
)
class App extends Component {
  render() {
    return (
      <div>
        <h1>现有机关{this.props.num}</h1>
        <button onClick={this.props.addGun}> 申请武器</button>
        <button onClick={this.props.delGun}> 上交武器</button>
        <button onClick={this.props.addGunAsync}> 拖两天再交</button>
      </div>
    );
  }
}
export default App;
