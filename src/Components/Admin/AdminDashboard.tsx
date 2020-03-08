import React, { Component } from "react";
import "./AdminDashboard.scss";
import AdminMenu from "./AdminMenu/AdminMenu";

class AdminDashboard extends Component {
  render() {
    return (
      <div className="Container--Admin">
        <div className="container--side">
          <div className="side"></div>
        </div>
        <div className="container--menu">
          <AdminMenu />
        </div>
        <div className="container--body">
          <div className="body"></div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
