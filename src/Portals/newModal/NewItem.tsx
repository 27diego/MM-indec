import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./NewItem.scss";

import DropZone from "./DropZone/DropZone";
import NewUser from "./newUser/NewUser";
import NewDepartment from "./departments/Departments";

//Redux import
import { connect } from "react-redux";
import { getDepartments, getCategories } from "../../Redux/actions/index";
import { AppActions } from "../../types/Actions";
import { AppState } from "../../Redux/Store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
const modal = document.querySelector("#modal") as HTMLElement;

interface NewItemProps {
  removeModal: () => void;
  modal: boolean;
}
interface NewItemState {}

type Props = NewItemProps & LinkStateProps & LinkDispatchProps;

class NewItem extends Component<Props, NewItemState> {
  portal: HTMLElement = document.createElement("div");

  componentDidMount() {
    modal.appendChild(this.portal);
    this.props.getDepartments();
    this.props.getCategories();
  }

  componentWillUnmount() {
    modal.removeChild(this.portal);
  }

  renderModal = () => {
    switch (this.props.MenuItem) {
      case "User":
        return (
          <NewUser
            modal={this.props.modal}
            removeModal={this.props.removeModal}
          />
        );
      case "Document":
        return (
          <DropZone
            modal={this.props.modal}
            removeModal={this.props.removeModal}
            departments={this.props.departments}
            categories={this.props.categories}
          />
        );
      case "Department":
        return (
          <NewDepartment
            modal={this.props.modal}
            removeModal={this.props.removeModal}
          />
        );
    }
  };

  render() {
    return ReactDOM.createPortal(this.renderModal(), this.portal);
  }
}

interface LinkStateProps {
  MenuItem: string;
  departments: string[];
  categories: string[];
}

interface LinkDispatchProps {
  getDepartments: () => void;
  getCategories: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: NewItemProps
): LinkStateProps => ({
  MenuItem: state.MenuItemReducer,
  departments: state.GetDepartmentsReducer,
  categories: state.CategoriesReducer,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: NewItemProps
): LinkDispatchProps => ({
  getDepartments: bindActionCreators(getDepartments, dispatch),
  getCategories: bindActionCreators(getCategories, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
