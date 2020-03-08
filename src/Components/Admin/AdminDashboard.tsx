import React, { Component } from "react";
import "./AdminDashboard.scss";
import AdminMenu from "./AdminMenu/AdminMenu";
import AdminList from "./AdminList/AdminList";

interface PROPS {}
interface STATE {
  new: boolean;
}

class AdminDashboard extends Component<PROPS, STATE> {
  state = {
    new: false
  };

  toggleNew = () => {
    this.setState(prevState => ({ new: !prevState.new }));
  };

  render() {
    return (
      <div className="Container--Admin">
        <div className="container--side">
          <div className="side"></div>
        </div>
        <div className="container--menu">
          <AdminMenu toggleNew={this.toggleNew} />
        </div>
        <div className="container--body">
          <AdminList new={this.state.new} />
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
