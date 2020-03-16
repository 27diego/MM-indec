import React, { Component } from "react";
import Overlay from "../../Overlay/Overlay";
import "./NewDepartment.scss";

interface Props {
  modal: boolean;
  removeModal: () => void;
}

interface State {
  departments: Array<string>;
  newItem: boolean;
  departmentInput: string;
  activeKey: string;
}

class NewDepartment extends Component<Props, State> {
  state = {
    departments: ["QA", "Maintenance", "Growing"],
    newItem: false,
    departmentInput: "",
    activeKey: ""
  };

  onSubmit = () => {
    if (this.state.departmentInput !== "") {
      this.setState({
        departments: [...this.state.departments, this.state.departmentInput]
      });

      this.setState({ departmentInput: "" });
    }
  };

  removeItem = () => {
    const newDepartments: Array<string> = this.state.departments.filter(
      item => item !== this.state.activeKey
    );
    this.setState({ departments: newDepartments, activeKey: "" });
  };

  render() {
    console.log(this.state.newItem);
    return (
      <div
        className={`modal modal--${
          this.props.modal ? "active" : "deactive"
        } departmentModal `}
      >
        <div className="departmentModal__header">Departments</div>
        <div className="DPlist">
          {this.state.departments.map(item => (
            <div key={item} className="DPlist__item">
              <div
                className={`DPlist__item__deleteConfirm DPlist__item__deleteConfirm--${
                  this.state.activeKey === item ? "show" : "hide"
                }`}
                onClick={this.removeItem}
              >
                <div className="span">Confirm</div>
              </div>
              <div
                onClick={(): void => this.setState({ activeKey: item })}
                className="DPlist__item__delete"
              >
                <div className="DPlist__item__delete--icon"></div>
              </div>
              <div className="DPlist__item__header">{item}</div>
            </div>
          ))}
        </div>
        <div
          className={`departmentModal__add departmentModal__add--${
            this.state.newItem ? "edit" : ""
          }`}
          onClick={(): void => {
            this.state.newItem === false
              ? this.setState({ newItem: true })
              : this.setState({});
          }}
        >
          {this.state.newItem ? (
            <input
              value={this.state.departmentInput}
              onChange={(e): void =>
                this.setState({ departmentInput: e.target.value })
              }
              className="departmentModal__add--input"
              type="text"
              placeholder="Department"
            />
          ) : (
            <div className="departmentModal__add--icon"></div>
          )}
        </div>

        <button
          //   onClick={this.props.removeModal}
          onClick={() => {
            this.setState({ newItem: false });
            this.onSubmit();
          }}
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
  }
}

export default NewDepartment;
