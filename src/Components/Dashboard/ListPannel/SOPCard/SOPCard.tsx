import React, { Component } from "react";
import "./SOPCard.scss";

//Redux imports
import { connect } from "react-redux";
import { setDocument } from "../../../../Redux/actions/index";
import { AppActions } from "../../../../types/Actions";
import { AppState } from "../../../../Redux/Store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

interface SOPProps {
  title: string;
  category: string;
  department: string;
  deleteDocument: (item: string) => void;
}

interface SOPState {
  label: boolean;
}

type Props = SOPProps & LinkDispatchProps;

class SOPCard extends Component<Props, SOPState> {
  state = {
    label: false,
  };

  render() {
    return (
      <div
        className="LPitem"
        key={this.props.title}
        onClick={(): void => {
          this.props.setDocument(this.props.title);
        }}
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
            this.setState((prevState) => ({ label: !prevState.label }))
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

interface LinkDispatchProps {
  setDocument: (item: string) => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: SOPProps
): LinkDispatchProps => ({
  setDocument: bindActionCreators(setDocument, dispatch),
});

export default connect(null, mapDispatchToProps)(SOPCard);
