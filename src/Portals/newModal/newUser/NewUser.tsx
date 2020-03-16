import React, { Component } from "react";
import Overlay from "../../Overlay/Overlay";
import "./NewUser.scss";

interface Props {
  modal: boolean;
  removeModal: () => void;
}

interface State {}

class NewUser extends Component<Props, State> {
  render() {
    return (
      <div
        className={`modal modal--${
          this.props.modal ? "active" : "deactive"
        } userModal`}
      >
        <div className="userModal__header">New User</div>
        <input type="text" placeholder="Name" className="userModal__name" />
        <input
          type="text"
          placeholder="Username"
          className="userModal__username"
        />
        <input
          type="text"
          placeholder="Password"
          className="userModal__password"
        />
        <select name="" id="" className="userModal__department">
          <option>Department</option>
          <option>QA</option>
          <option>Packing</option>
          <option>Harvesting</option>
          <option>Growing</option>
          <option>Maintenance</option>
          <option>Safety</option>
        </select>
        <select name="" id="" className="userModal__admin">
          <option>Admin</option>
          <option>Yes</option>
          <option>No</option>
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
