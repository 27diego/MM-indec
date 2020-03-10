import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./NewItem.scss";
import history from "../../history";

const modal = document.querySelector("#modal") as HTMLElement;

interface Props {
  removeModal: () => void;
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
      <div className="container--newUser userModal">
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
          <li>QA</li>
          <li>Packing</li>
          <li>Harvesting</li>
          <li>Growing</li>
          <li>Maintenance</li>
          <li>Safety</li>
        </select>
        <select name="" id="" className="userModal__Admin">
          <li>Yes</li>
          <li>No</li>
        </select>
      </div>
    );
  };

  render() {
    return ReactDOM.createPortal(<div>Hello</div>, this.portal);
  }
}

export default NewItem;
