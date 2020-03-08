import React, { Component } from "react";
import "./AdminMenu.scss";

class AdminMenu extends Component {
  state = {
    item: "Document",
    search: ""
  };
  render() {
    return (
      <div className="Container--AdminMenu AdminMenu">
        <div className="heading">
          <div className="heading__header">Admin Dashboard</div>
          <button className="heading__addButton addButton">
            <div className="logo--container">
              <div className="addButton__logo">&nbsp;</div>
            </div>
            New {this.state.item}
          </button>
        </div>

        <div className="menu">
          <ul className="menu__items">
            <li
              className={`menu__items--dep menu__items--single menu__items--single--${
                this.state.item === "Department" ? "active" : ""
              }`}
              onClick={(): void => this.setState({ item: "Department" })}
            >
              Departments
            </li>
            <li
              className={`menu__items--users menu__items--single menu__items--single--${
                this.state.item === "User" ? "active" : ""
              }`}
              onClick={(): void => this.setState({ item: "User" })}
            >
              Users
            </li>
            <li
              className={`menu__items--sop menu__items--single menu__items--single--${
                this.state.item === "Document" ? "active" : ""
              }`}
              onClick={(): void => this.setState({ item: "Document" })}
            >
              Sop Documents
            </li>
          </ul>
          <input
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
            className="menu__search"
            placeholder={`Search ${this.state.item}s`}
            type="text"
          />
        </div>
      </div>
    );
  }
}

export default AdminMenu;
