import React, { Component } from "react";
import "./AdminList.scss";

//redux imports
import { connect } from "react-redux";
import {
  getUsers,
  deleteUser,
  getDocuments,
} from "../../../Redux/actions/index";
import { AppActions } from "../../../types/Actions";
import { AppState } from "../../../Redux/Store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { User } from "../../../types/User";
import { Document } from "../../../types/Document";

import UserCard from "./UserCard/UserCard";
import EditUser from "../../../Portals/newModal/editUser/EditUser";

interface AdminListProps {
  filter: string;
  setFilter: (filter: string) => void;
  listMode: string;
}
interface AdminListState {
  label: string;
  modal: boolean;
  firstName: string;
  lastName: string;
  userName: string;
  admin: boolean;
  department: string;
}

type Props = AdminListProps & LinkStateProps & LinkDispatchProps;

class AdminList extends Component<Props, AdminListState> {
  constructor(props: Props) {
    super(props);

    this.props.getUsers();
    this.props.setFilter("");
    this.props.getDocuments();

    this.state = {
      label: "",
      modal: false,
      firstName: "",
      lastName: "",
      userName: "",
      admin: false,
      department: "",
    };
  }

  handleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  renderUsersCard = () => {
    return (
      <div className="Container--UserList Container--UserList--cards">
        {this.props.Users.map((user) => {
          if (user.username === this.props.User.username) {
            return "";
          }
          return (
            <UserCard
              key={user.username}
              firstName={user.first_name}
              lastName={user.last_name}
              userName={user.username}
              department={user.department}
              admin={user.admin}
            />
          );
        })}
      </div>
    );
  };

  renderSOPList = () => {
    return (
      <div className="Container--UserList Container--UserList--cards">
        {this.props.Documents.map((item) => item.title)}
      </div>
    );
  };

  renderUsersList = () => {
    return (
      <div className="Container--UserList">
        <ul className="user">
          <li></li>
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

        {this.props.Users.map((user) => {
          if (user.username === this.props.User.username) {
            return "";
          }

          return (
            <ul key={user.username} className="user">
              <li></li>
              <li className="user__name">
                {user.first_name + " " + user.last_name}
              </li>
              <li className="user__username">{user.username}</li>
              <li className="user__admin">{user.admin ? "Yes" : "No"}</li>
              <li className="user__department">{user.department}</li>
              <li>
                <div
                  onClick={(): void =>
                    this.setState((prevState) => ({
                      label: prevState.label === "" ? user.username : "",
                    }))
                  }
                  className="user__edit"
                >
                  <div>&nbsp;</div>
                </div>
                <div
                  style={{
                    display:
                      this.state.label === user.username ? "flex" : "none",
                  }}
                  className="user__label"
                >
                  <div
                    onClick={() => {
                      this.setState({
                        userName: user.username,
                        firstName: user.first_name,
                        lastName: user.last_name,
                        admin: user.admin,
                        department: user.department,
                      });
                      this.handleModal();
                    }}
                  >
                    Edit
                  </div>
                  <div
                    onClick={() =>
                      this.props.deleteUser(
                        user.first_name,
                        user.last_name,
                        user.username
                      )
                    }
                  >
                    Delete
                  </div>
                </div>
              </li>
            </ul>
          );
        })}

        {this.state.modal ? (
          <EditUser
            modal={this.state.modal}
            removeModal={this.handleModal}
            name={this.state.firstName + " " + this.state.lastName}
            username={this.state.userName}
            admin={this.state.admin}
            department={this.state.department}
          />
        ) : (
          ""
        )}
      </div>
    );
  };

  renderUsers = () => {
    return this.props.listMode === "list"
      ? this.renderUsersList()
      : this.renderUsersCard();
  };

  render() {
    return (
      <div
        className="temp-overflow"
        style={{ overflowY: "scroll", maxHeight: "62vh", minHeight: "62vh" }}
      >
        {this.props.MenuItem === "User"
          ? this.renderUsers()
          : this.props.MenuItem === "Document"
          ? this.renderSOPList()
          : ""}
      </div>
    );
  }
}

interface LinkStateProps {
  MenuItem: string;
  Users: User[];
  Documents: Document[];
  User: User;
}

interface LinkDispatchProps {
  getUsers: () => void;
  deleteUser: (first_name: string, last_name: string, username: string) => void;
  getDocuments: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: AdminListProps
): LinkStateProps => ({
  MenuItem: state.MenuItemReducer,
  Users: state.GetUsersReducer,
  Documents: state.DocumentReducer,
  User: state.AuthenticationReducer,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: AdminListProps
): LinkDispatchProps => ({
  getUsers: bindActionCreators(getUsers, dispatch),
  deleteUser: bindActionCreators(deleteUser, dispatch),
  getDocuments: bindActionCreators(getDocuments, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
