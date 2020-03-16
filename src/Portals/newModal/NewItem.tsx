import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./NewItem.scss";

import DropZone from "./DropZone/DropZone";
import NewUser from "./newUser/NewUser";
import NewDepartment from "./newDepartment/NewDepartment";

//Redux import
import { connect } from "react-redux";
import { AppState } from "../../Redux/Store/configureStore";

const modal = document.querySelector("#modal") as HTMLElement;

interface NewItemProps {
  removeModal: () => void;
  modal: boolean;
}
interface NewItemState {
  departments: Array<string>;
}

type Props = NewItemProps & LinkStateProps;

class NewItem extends Component<Props, NewItemState> {
  portal: HTMLElement = document.createElement("div");

  componentDidMount() {
    modal.appendChild(this.portal);
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
}
interface LinkDispatchProps {
  selectMenu: (item: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: NewItemProps
): LinkStateProps => ({
  MenuItem: state.MenuItemReducer
});

export default connect(mapStateToProps, { null: null })(NewItem);
