import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./NewItem.scss";
import history from "../../history";

const modal = document.querySelector("#modal") as HTMLElement;

interface Props {
  removeModal: () => void;
  modal: boolean;
}
interface State {}

class NewItem extends Component<Props, State> {
  portal: HTMLElement = document.createElement("div");

  componentDidMount() {
    modal.appendChild(this.portal);
  }

  componentWillUnmount() {
    modal.removeChild(this.portal);
  }

  newUser = () => {
    return (
      <div
        className={`container--newUser userModal userModal--${
          this.props.modal ? "active" : "deactive"
        }`}
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
          <button className="nubuttons__ok">OK</button>
          <button className="nuButtons__cancel">cancel</button>
        </div>
      </div>
    );
  };

  render() {
    return ReactDOM.createPortal(this.newUser(), this.portal);
  }
}

export default NewItem;
