import React, { Component } from "react";
import "./SOPCard.scss";

interface Props {
  title: string;
  category: string;
  department: string;
  setDocument: (item: string) => void;
  deleteDocument: (item: string) => void;
}

interface State {
  label: boolean;
}

class SOPCard extends Component<Props, State> {
  state = {
    label: false
  };

  render() {
    return (
      <div
        className="LPitem"
        key={this.props.title}
        onClick={(): void => this.props.setDocument(this.props.title)}
      >
        <div
          className={`LPitem__sideColor LPitem__sideColor--${this.props.category}`}
        ></div>
        <div className="LPitem__header">{this.props.department}</div>
        <div className="LPitem__title">
          {this.props.title.replace(/_/g, " ")}
        </div>
        <div
          onClick={() =>
            this.setState(prevState => ({ label: !prevState.label }))
          }
          className="userCard__menu"
        >
          <div
            className={`userCard__menu__lines userCard__menu__lines--${
              this.state.label ? "active" : ""
            }`}
          ></div>
          <div
            className={`userCard__label userCard__label--${
              this.state.label ? "active" : ""
            }`}
          >
            <div
              onClick={(): void => this.props.deleteDocument(this.props.title)}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SOPCard;
