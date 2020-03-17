import React, { Component } from "react";
import "./AdminDashboard.scss";
import AdminMenu from "./AdminMenu/AdminMenu";
import AdminList from "./AdminList/AdminList";
import NewItem from "../../Portals/newModal/NewItem";

//redux imports
import { connect } from "react-redux";
import { filterUsers } from "../../Redux/actions/index";
import { AppActions } from "../../types/Actions";
import { AppState } from "../../Redux/Store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

interface AdminDashboardProps {}
interface AdminDashboardState {
  modal: boolean;
  filter: string;
}

type Props = AdminDashboardProps & LinkStateProps & LinkDispatchProps;

class AdminDashboard extends Component<Props, AdminDashboardState> {
  state = {
    modal: false,
    filter: ""
  };

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  removeModal = () => {
    this.setState({ modal: false });
  };

  setFilter = (filter: string) => {
    switch (this.props.MenuItem) {
      case "User":
        this.props.filterUsers(filter);
        break;
      case "Document":
        console.log("it is in document mode");
        break;
      case "Department":
        console.log("it is in department mode");
        break;
    }

    this.setState({ filter });
  };

  render() {
    return (
      <div className="Container--Admin">
        <div className="container--side">
          <div className="side"></div>
        </div>
        <div className="container--menu">
          <AdminMenu
            filter={this.state.filter}
            setFilter={this.setFilter}
            modal={this.state.modal}
            toggleModal={this.toggleModal}
          />
        </div>
        <div className="container--body">
          <AdminList filter={this.state.filter} setFilter={this.setFilter} />
        </div>
        <NewItem removeModal={this.removeModal} modal={this.state.modal} />
        <div></div>
      </div>
    );
  }
}

interface LinkStateProps {
  MenuItem: string;
}
interface LinkDispatchProps {
  filterUsers: (item: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: AdminDashboardProps
): LinkStateProps => ({
  MenuItem: state.MenuItemReducer
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: AdminDashboardProps
): LinkDispatchProps => ({
  filterUsers: bindActionCreators(filterUsers, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
