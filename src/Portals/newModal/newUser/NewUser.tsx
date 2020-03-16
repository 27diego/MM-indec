import React, { Component } from "react";
import Overlay from "../../Overlay/Overlay";
import "./NewUser.scss";

import { postUser } from "../../../Redux/actions/index";

interface Props {
  modal: boolean;
  removeModal: () => void;
}

interface State {
  name: string;
  username: string;
  password: string;
  department: string;
  admin: boolean;
}

class NewUser extends Component<Props, State> {
  state = {
    name: "",
    username: "",
    password: "",
    department: "",
    admin: false
  };

  render() {
    return (
      <div
        className={`modal modal--${
          this.props.modal ? "active" : "deactive"
        } userModal`}
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
        <select className="userModal__department">
          <option value="">Department</option>
          <option>QA</option>
          <option>Packing</option>
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
          <button onClick={this.props.removeModal} className="nubuttons__ok">
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

export default NewUser;
