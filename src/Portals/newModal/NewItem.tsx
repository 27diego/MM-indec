import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./NewItem.scss";

import DropZone from "./DropZone/DropZone";
import NewUser from "./newUser/NewUser";
import NewDepartment from "./newDepartment/NewDepartment";

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

  componentDidMount() {
    modal.appendChild(this.portal);
  }

  componentWillUnmount() {
    modal.removeChild(this.portal);
  }

  render() {
    return ReactDOM.createPortal(
      // <DropZone
      //   modal={this.props.modal}
      //   removeModal={this.props.removeModal}
      // />,
      // <NewUser modal={this.props.modal} removeModal={this.props.removeModal} />,
      <NewDepartment
        modal={this.props.modal}
        removeModal={this.props.removeModal}
      />,
      this.portal
    );
  }
}

export default NewItem;
