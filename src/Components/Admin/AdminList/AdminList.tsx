import React, { Component } from "react";
import "./AdminList.scss";

interface PROPS {
  new: boolean;
}
interface STATE {
  new: boolean;
}

class AdminList extends Component<PROPS, STATE> {
  renderUsers = () => {
    return (
      <div className="Container--UserList">
        <ul className="user">
          <li>img</li>
          <li className="user__name">Name</li>
          <li className="user__username">Username</li>
          <li className="user__admin">Admin</li>
          <li className="user__department">Department</li>
          <li>
            <div className="user__edit">
              <div>&nbsp;</div>
            </div>
          </li>
        </ul>

        <ul className="user">
          <li>img</li>
          <li className="user__name">
            <input
              type="text"
              placeholder="Name"
              className="user__name__input"
            />
          </li>
          <li className="user__username">
            <input
              type="text"
              placeholder="Username"
              className="user__username__input"
            />
          </li>
          <li className="user__admin">
            <select name="" id="">
              <option></option>
              <option>True</option>
              <option> false</option>
            </select>
          </li>
          <li className="user__department">
            <input
              type="text"
              placeholder="Department"
              className="user__department__input"
            />
          </li>
        </ul>
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.renderUsers()}</React.Fragment>;
  }
}

export default AdminList;
