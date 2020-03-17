import React, { Component } from "react";
import "./AdminList.scss";

//redux imports
import { connect } from "react-redux";
import { getUsers } from "../../../Redux/actions/index";
import { AppActions } from "../../../types/Actions";
import { AppState } from "../../../Redux/Store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { User } from "../../../types/User";

interface AdminListProps {}
interface AdminListState {
  usersList: string[];
  userForm: {};
}

type Props = AdminListProps & LinkStateProps & LinkDispatchProps;

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
    this.props.getUsers();
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

        {this.props.Users.map(user => {
          return (
            <ul key={user.username} className="user">
              <li>img</li>
              <li className="user__name">
                {user.first_name + " " + user.last_name}
              </li>
              <li className="user__username">{user.username}</li>
              <li className="user__admin">{user.admin ? "Yes" : "No"}</li>
              <li className="user__department">{user.department}</li>
              <li>
                <div className="user__edit">
                  <div>&nbsp;</div>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.renderUsers()}</React.Fragment>;
  }
}

interface LinkStateProps {
  MenuItem: string;
  Users: User[];
}

interface LinkDispatchProps {
  getUsers: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: AdminListProps
): LinkStateProps => ({
  MenuItem: state.MenuItemReducer,
  Users: state.GetUsersReducer
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: AdminListProps
): LinkDispatchProps => ({ getUsers: bindActionCreators(getUsers, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
