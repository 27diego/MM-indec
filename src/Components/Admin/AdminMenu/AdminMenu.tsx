import React, { Component } from "react";
import "./AdminMenu.scss";

//redux imports
import { connect } from "react-redux";
import { selectMenu } from "../../../Redux/actions/index";
import { AppActions } from "../../../types/Actions";
import { AppState } from "../../../Redux/Store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

interface AdminMenuProps {
  modal: boolean;
  toggleModal: () => void;
}
interface AdminMenuState {
  search: string;
}

type Props = AdminMenuProps & LinkDispatchProps & LinkStateProps;

class AdminMenu extends Component<Props, AdminMenuState> {
  state = {
    search: ""
  };

  render() {
    return (
      <div className="Container--AdminMenu AdminMenu">
        <div className="heading">
          <div className="heading__header">Admin Dashboard</div>
          <button
            onClick={this.props.toggleModal}
            className="heading__addButton addButton"
          >
            <div className="logo--container">
              <div className="addButton__logo">&nbsp;</div>
            </div>
            New {this.props.MenuItem}
          </button>
        </div>

        <div className="menu">
          <ul className="menu__items">
            <li
              className={`menu__items--dep menu__items--single menu__items--single--${
                this.props.MenuItem === "Department" ? "active" : ""
              }`}
              onClick={(): void => this.props.selectMenu("Department")}
            >
              Departments
            </li>
            <li
              className={`menu__items--users menu__items--single menu__items--single--${
                this.props.MenuItem === "User" ? "active" : ""
              }`}
              onClick={(): void => this.props.selectMenu("User")}
            >
              Users
            </li>
            <li
              className={`menu__items--sop menu__items--single menu__items--single--${
                this.props.MenuItem === "Document" ? "active" : ""
              }`}
              onClick={(): void => this.props.selectMenu("Document")}
            >
              Sop Documents
            </li>
          </ul>
          <input
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
            className="menu__search"
            placeholder={`Search ${this.props.MenuItem}s`}
            type="text"
          />
        </div>
      </div>
    );
  }
}

interface LinkStateProps {
  MenuItem: string;
}
interface LinkDispatchProps {
  selectMenu: (item: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: AdminMenuProps
): LinkStateProps => ({
  MenuItem: state.MenuItemReducer
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: AdminMenuProps
): LinkDispatchProps => ({
  selectMenu: bindActionCreators(selectMenu, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminMenu);
