import React, { Component } from "react";
import Overlay from "../../Overlay/Overlay";
import "./NewUser.scss";

import { connect } from "react-redux";
import { postUser, getDepartments } from "../../../Redux/actions/index";
import { AppActions } from "../../../types/Actions";
import { AppState } from "../../../Redux/Store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

interface NewUserProps {
  modal: boolean;
  removeModal: () => void;
}

interface NewUserState {
  name: string;
  username: string;
  password: string;
  department: string;
  admin: boolean;
  style: {};
}

type Props = NewUserProps & LinkDispatchProps & LinkStateProps;

class NewUser extends Component<Props, NewUserState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      password: "",
      department: "",
      admin: false,
      style: {
        transform: "",
        transition: "all .5s ease",
        bottom: "0",
        opacity: "0"
      }
    };

    this.props.getDepartments();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        style: {
          ...this.state.style,
          transform: "translateY(-20rem)",
          opacity: "1"
        }
      });
    }, 500);
  }

  componentWillReceiveProps(newProps: Props) {
    console.log("will recieve props");
  }

  handleSubmit = () => {
    const { name, username, password, department, admin } = this.state;

    const first_name = name.substr(0, name.indexOf(" "));
    const last_name = name.substr(name.indexOf(" ") + 1, name.length);

    // console.log(newUser);
    this.props.postUser(
      first_name,
      last_name,
      username,
      password,
      admin,
      department
    );
  };

  render() {
    return (
      <div
        className={`modal modal--${
          this.props.modal ? "active" : "deactive"
        } userModal`}
        style={this.state.style}
      >
        <div className="userModal__header">New User</div>
        <input
          value={this.state.name}
          onChange={(e): void => this.setState({ name: e.target.value })}
          type="text"
          placeholder="Name"
          className="userModal__name"
        />
        <input
          value={this.state.username}
          onChange={(e): void => this.setState({ username: e.target.value })}
          type="text"
          placeholder="Username"
          className="userModal__username"
        />
        <input
          value={this.state.password}
          onChange={(e): void => this.setState({ password: e.target.value })}
          type="text"
          placeholder="Password"
          className="userModal__password"
        />
        <select
          onChange={(e): void => this.setState({ department: e.target.value })}
          className="userModal__department"
        >
          <option value="">Department</option>
          {this.props.departments.map(dep => (
            <option key={dep} value={dep}>
              {dep}
            </option>
          ))}
        </select>
        <select
          onChange={(e): void =>
            this.setState({ admin: e.target.value === "true" ? true : false })
          }
          className="userModal__admin"
        >
          <option>Admin</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <div className="userModal__buttons nubuttons">
          <button
            onClick={this.props.removeModal}
            className="nuButtons__cancel"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              this.handleSubmit();
              this.props.removeModal();
            }}
            className="nubuttons__ok"
          >
            OK
          </button>
        </div>

        {this.props.modal ? (
          <Overlay removeModal={this.props.removeModal} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

interface LinkStateProps {
  departments: string[];
}

interface LinkDispatchProps {
  getDepartments: () => void;
  postUser: (
    first_name: string,
    last_name: string,
    username: string,
    password: string,
    admin: boolean,
    department: string
  ) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: NewUserProps
): LinkStateProps => ({
  departments: state.GetDepartmentsReducer
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: NewUserProps
): LinkDispatchProps => ({
  getDepartments: bindActionCreators(getDepartments, dispatch),
  postUser: bindActionCreators(postUser, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
