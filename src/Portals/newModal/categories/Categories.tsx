import React, { Component } from "react";
import Overlay from "../../Overlay/Overlay";
import "./Categories.scss";

import { connect } from "react-redux";
import {
  getCategories,
  deleteCategory,
  postCategory,
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
  style: {};
}

type Props = NewDepartmentProps & LinkDispatchProps & LinkStateProps;

class NewDepartment extends Component<Props, NewDepartmentState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newItem: false,
      departmentInput: "",
      activeKey: "",
      style: {
        transform: "",
        transition: "all .5s ease",
        bottom: "0",
        opacity: "0",
      },
    };

    this.props.getCategories();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        style: {
          ...this.state.style,
          transform: "translateY(-20rem)",
          opacity: "1",
        },
      });
    }, 500);
  }

  onSubmit = () => {
    if (this.state.departmentInput !== "") {
      this.props.postCategory(this.state.departmentInput);
    }
    this.setState({ departmentInput: "" });
  };

  removeItem = () => {
    this.setState({
      activeKey: "",
    });
    this.props.deleteCategory(this.state.activeKey);
  };

  render() {
    return (
      <div
        className={`modal modal--${
          this.props.modal ? "active" : "deactive"
        } departmentModal `}
        style={this.state.style}
      >
        <div className="departmentModal__header">Departments</div>
        <div className="DPlist">
          {this.props.categories.map((item) => (
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
                onClick={(): void =>
                  this.setState((prevState) => ({
                    activeKey: prevState.activeKey === item ? "" : item,
                  }))
                }
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
  categories: string[];
}

interface LinkDispatchProps {
  getCategories: () => void;
  deleteCategory: (item: string) => void;
  postCategory: (item: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: NewDepartmentProps
): LinkStateProps => ({
  categories: state.CategoriesReducer,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: NewDepartmentProps
): LinkDispatchProps => ({
  getCategories: bindActionCreators(getCategories, dispatch),
  deleteCategory: bindActionCreators(deleteCategory, dispatch),
  postCategory: bindActionCreators(postCategory, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDepartment);
