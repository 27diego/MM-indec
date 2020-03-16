import React, { Component } from "react";
import Overlay from "../../Overlay/Overlay";
import "./NewDepartment.scss";

import { connect } from "react-redux";
import {
  getDepartments,
  deleteDepartment,
  postDepartment
} from "../../../Redux/actions/index";
import { AppActions } from "../../../types/Actions";
import { AppState } from "../../../Redux/Store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

interface NewDepartmentProps {
  modal: boolean;
  removeModal: () => void;
}

interface NewDepartmentState {
  newItem: boolean;
  departmentInput: string;
  activeKey: string;
}

type Props = NewDepartmentProps & LinkDispatchProps & LinkStateProps;

class NewDepartment extends Component<Props, NewDepartmentState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newItem: false,
      departmentInput: "",
      activeKey: ""
    };

    if (!this.props.departments) {
      this.props.getDepartments();
    }

    console.log(this.props.departments);
  }

  onSubmit = () => {
    if (this.state.departmentInput !== "") {
      postDepartment(this.state.departmentInput);
      this.setState({ departmentInput: "" });
      this.props.getDepartments();
    }
  };

  removeItem = () => {
    deleteDepartment(this.state.activeKey);
    this.setState({ activeKey: "" });
  };

  render() {
    console.log(this.props.departments);
    return (
      <div
        className={`modal modal--${
          this.props.modal ? "active" : "deactive"
        } departmentModal `}
      >
        <div className="departmentModal__header">Departments</div>
        <div className="DPlist">
          {this.props.departments.map(item => (
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
          onClick={() => {
            if (this.state.newItem) {
              this.setState({ newItem: false });
              this.onSubmit();
            } else {
              this.props.removeModal();
            }
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

interface LinkStateProps {
  departments: string[];
}

interface LinkDispatchProps {
  getDepartments: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: NewDepartmentProps
): LinkStateProps => ({
  departments: state.GetDepartmentsReducer
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: NewDepartmentProps
): LinkDispatchProps => ({
  getDepartments: bindActionCreators(getDepartments, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDepartment);
