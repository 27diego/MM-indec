import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Overlay.scss";

const over = document.querySelector("#overlay") as HTMLElement;

interface Props {
  removeModal?: () => void;
}
interface State {
  modal: boolean;
}

export default class Overlay extends Component<Props, State> {
  portal: HTMLElement = document.createElement("div");

  state = {
    modal: false
  };

  componentDidMount = () => {
    over.appendChild(this.portal);
  };

  componentWillUnmount = () => {
    over.removeChild(this.portal);
  };

  render() {
    if (this.state.modal === false) {
      setTimeout(() => {
        this.setState({ modal: true });
      }, 200);
    }

    return ReactDOM.createPortal(
      <div
        onClick={this.props.removeModal}
        className={`Container--Overlay Container--Overlay--${
          this.state.modal ? "active" : "deactive"
        }`}
      ></div>,
      this.portal
    );
  }
}
