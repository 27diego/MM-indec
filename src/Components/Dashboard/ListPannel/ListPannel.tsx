import React, { Component } from "react";
import "./ListPannel.scss";

interface STATE {}
interface PROPS {
  users: [];
}

class ListPannel extends Component<PROPS, STATE> {
  state = {
    users: []
  };

  render() {
    return <div className="Container--ListPannel">Hello List</div>;
  }
}

export default ListPannel;
