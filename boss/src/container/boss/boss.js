import React, { Component } from "react";
import UseList from "../../component/userlist/userlist";
import Constants from "./../../support/constants";
import axios from "axios";

export default class boss extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get(Constants.URL_PREFIX + "/user/list?type=boss").then(response => {
      console.log("response", response);
      if (response.status === 200) {
        console.log("response", response.data.code);
        if (response.data.code === 1) {
          this.setState({
            data: response.data.data
          });
        }
      } else {
      }
    });
  }
  render() {
    console.log("data", this.state.data);
    return <UseList data={this.state.data} />;
  }
}
