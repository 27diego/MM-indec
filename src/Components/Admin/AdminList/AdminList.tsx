import React, { Component } from "react";
import "./AdminList.scss";

import { connect } from "react-redux";
import { getUsers } from "../../../Redux/actions/index";
import { AppActions } from "../../../types/Actions";
import { AppState } from "../../../Redux/Store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators, Observable } from "redux";

import { User } from "../../../types/User";
import { Users } from "../../../types/Users";

interface AdminListProps {
  new: boolean;
}
interface AdminListState {
  usersList: string[];
  userForm: {};
}

type PROPS = AdminListProps & LinkStateProps & LinkDispatchProps;

class AdminList extends Component<PROPS, AdminListState> {
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
    // this.setState({ usersList: this.props.users });
    console.log("from redux: ", this.props);
    // console.log(this.state.usersList);
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

        {this.props.new ? (
          <form>
            <ul className="user">
              <li></li>
              <li className="user__name">
                <input
                  value={this.state.userForm.name}
                  onChange={(e): void =>
                    this.setState({
                      ...this.state,
                      userForm: {
                        ...this.state.userForm,
                        name: e.target.value
                      }
                    })
                  }
                  type="text"
                  placeholder="Name"
                  className="user__input user__input--name"
                />
              </li>
              <li className="user__username">
                <input
                  value={this.state.userForm.userName}
                  onChange={(e): void =>
                    this.setState({
                      ...this.state,
                      userForm: {
                        ...this.state.userForm,
                        userName: e.target.value
                      }
                    })
                  }
                  type="text"
                  placeholder="Username"
                  className="user__input user__input--username"
                />
              </li>
              <li className="user__admin">
                <select
                  className="user__input user__input--admin"
                  name=""
                  id=""
                  onChange={(e): void =>
                    this.setState({
                      ...this.state,
                      userForm: {
                        ...this.state.userForm,
                        admin:
                          e.target.value === "True"
                            ? true
                            : e.target.value === ""
                            ? null
                            : false
                      }
                    })
                  }
                >
                  <option value=""></option>
                  <option value="True">Yes</option>
                  <option value="False"> No</option>
                </select>
              </li>
              <li className="user__department">
                <input
                  value={this.state.userForm.department}
                  onChange={(e): void =>
                    this.setState({
                      ...this.state,
                      userForm: {
                        ...this.state.userForm,
                        department: e.target.value
                      }
                    })
                  }
                  type="text"
                  placeholder="Department"
                  className="user__input user__input--department"
                />
              </li>
              <li className="user__edit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <title>ionicons-v5-e</title>
                  <path
                    d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
                    style={{
                      fill: "#000",
                      stroke: "#fff",
                      strokeMiterlimit: 10,
                      strokeWidth: "32px"
                    }}
                  />
                  <polyline
                    points="368 192 256.13 320 208.18 272"
                    style={{
                      fill: "#000",
                      stroke: "#fff",
                      strokeMiterlimit: 10,
                      strokeWidth: "32px"
                    }}
                  />
                  <line
                    x1="191.95"
                    y1="320"
                    x2="144"
                    y2="272"
                    style={{
                      fill: "#000",
                      stroke: "#fff",
                      strokeMiterlimit: 10,
                      strokeWidth: "32px"
                    }}
                  />
                  <line
                    x1="305.71"
                    y1="192"
                    x2="254.16"
                    y2="251"
                    style={{
                      fill: "#000",
                      stroke: "#fff",
                      strokeMiterlimit: 10,
                      strokeWidth: "32px"
                    }}
                  />
                </svg>
              </li>
            </ul>
          </form>
        ) : (
          ""
        )}

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
  reduxState: AppState;
}
interface LinkDispatchProps {
  getUsers: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: AdminListProps
): LinkStateProps => ({
  reduxState: state
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: AdminListProps
): LinkDispatchProps => ({
  getUsers: bindActionCreators(getUsers, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
