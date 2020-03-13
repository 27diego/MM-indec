import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./NewItem.scss";

import Overlay from "../Overlay/Overlay";

const modal = document.querySelector("#modal") as HTMLElement;

interface Props {
  removeModal: () => void;
  modal: boolean;
}
interface State {
  departments: Array<string>;
}

class NewItem extends Component<Props, State> {
  portal: HTMLElement = document.createElement("div");

  state = {
    departments: ["QA", "Maintenance", "Growing"]
  };

  componentDidMount() {
    modal.appendChild(this.portal);
  }

  componentWillUnmount() {
    modal.removeChild(this.portal);
  }

  newDepartment = () => {
    return (
      <div
        className={`modal modal--${
          this.props.modal ? "active" : "deactive"
        } departmentModal `}
      >
        <div className="departmentModal__header">Departments</div>
        <div className="DPlist">
          {this.state.departments.map(item => (
            <div className="DPlist__item">
              <div className="DPlist__item__delete">
                <div className="DPlist__item__delete--icon"></div>
              </div>
              <div className="DPlist__item__header">{item}</div>
            </div>
          ))}
        </div>
        <div className="departmentModal__add">
          <div className="departmentModal__add--icon"></div>
        </div>

        <button
          onClick={this.props.removeModal}
          className="departmentModal__ok"
        >
          OK
        </button>

        {this.props.modal ? (
          <Overlay removeModal={this.props.removeModal} />
        ) : (
          ""
        )}
      </div>
    );
  };

  newUser = () => {
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
  };

  render() {
    return ReactDOM.createPortal(this.newDepartment(), this.portal);
  }
}

export default NewItem;
