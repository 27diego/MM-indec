import React, { Component } from "react";
import "./AdminList.scss";

//redux imports
import { connect } from "react-redux";
import { AppState } from "../../../Redux/Store/configureStore";

interface AdminListProps {}
interface AdminListState {
  usersList: string[];
  userForm: {};
}

type Props = AdminListProps & LinkStateProps;

class AdminList extends Component<Props, AdminListState> {
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

interface LinkStateProps {
  MenuItem: string;
}

const mapStateToProps = (
  state: AppState,
  ownProps: AdminListProps
): LinkStateProps => ({
  MenuItem: state.MenuItemReducer
});

export default connect(mapStateToProps, { null: null })(AdminList);
