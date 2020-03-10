import React, { Component } from "react";
import "./AdminList.scss";

interface AdminListProps {}
interface AdminListState {
  usersList: string[];
  userForm: {};
}

class AdminList extends Component<AdminListProps, AdminListState> {
  state = {
    usersList: [],
    userForm: {
      name: "",
      userName: "",
      admin: null,
      password: "",
      department: ""
    },
    departmentForm: {
      department: ""
    },
    sopDocumentForm: {}
  };

  componentDidMount = () => {
    //call getUsers action
    //set props data to component state
  };

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

        {/* {this.state.usersList.map(user => {
          return (
            <ul className="user">
              <li>img</li>
              <li className="user__name">{user.first_name + " " + user.last_name}</li>
              <li className="user__username">{user.username}</li>
              <li className="user__admin">{user.admin}</li>
              <li className="user__department">{user.department}</li>
              <li>
                <div className="user__edit">
                  <div>&nbsp;</div>
                </div>
              </li>
            </ul>
          );
        })} */}
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.renderUsers()}</React.Fragment>;
  }
}

export default AdminList;
