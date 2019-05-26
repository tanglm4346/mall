import React, { Component } from "react";
import UserList from "../../component/userlist/userlist";
import axios from "axios";

export default class Genius extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("/api/user/list?type=genius").then(response => {
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
    return <UserList data={this.state.data} />;
  }
}
