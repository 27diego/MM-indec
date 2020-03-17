import React, { Component } from "react";
import "./AdminDashboard.scss";
import AdminMenu from "./AdminMenu/AdminMenu";
import AdminList from "./AdminList/AdminList";
import NewItem from "../../Portals/newModal/NewItem";

interface PROPS {}
interface STATE {
  modal: boolean;
  filter: string;
}

class AdminDashboard extends Component<PROPS, STATE> {
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

  render() {
    return (
      <div className="Container--Admin">
        <div className="container--side">
          <div className="side"></div>
        </div>
        <div className="container--menu">
          <AdminMenu modal={this.state.modal} toggleModal={this.toggleModal} />
        </div>
        <div className="container--body">
          <AdminList />
        </div>
        <NewItem removeModal={this.removeModal} modal={this.state.modal} />
        <div></div>
      </div>
    );
  }
}

export default AdminDashboard;
