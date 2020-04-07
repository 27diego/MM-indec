import React, { Component, createRef } from "react";
import "./SidePannel.scss";

//Redux imports
import { connect } from "react-redux";
import { AppState } from "../../../Redux/Store/configureStore";

import Categories from "../../../Portals/newModal/categories/Categories";

interface SidePannelState {
  activeSlider: string;
  modal: boolean;
}

interface SidePannelProps {
  name: string;
  list: string;
  toggleList: (item: string) => void;
  admin: boolean;
}

type Props = SidePannelProps & LinkStateProps;

class SidePannel extends Component<Props, SidePannelState> {
  private imgRef = createRef<HTMLImageElement>();

  constructor(props: Props) {
    super(props);

    this.state = {
      activeSlider: "cards",
      modal: false,
    };
  }

  componentDidMount() {
    if (this.props.admin) {
      fetch(
        `https://ui-avatars.com/api/?name=${this.props.firstName}+${this.props.lastName}&rounded=true&background=fff&color=0D8ABC`,
        {
          method: "GET",
        }
      ).then((response) => {
        response.arrayBuffer().then((buffer) => {
          var base64Flag = "data:image/jpeg;base64,";
          var imageStr = this.arrayBufferToBase64(buffer);

          this.imgRef.current!.src = `${base64Flag}${imageStr}`;
        });
      });
    }
  }

  arrayBufferToBase64 = (buffer: ArrayBuffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((b) => (binary += String.fromCharCode(b)));

    return window.btoa(binary);
  };

  handleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <div className="Container--SidePannel SidePannel">
        <img className="SidePannel__avatar" ref={this.imgRef} alt="avatar" />
        <div className="actions">
          <div className="actions__title">Actions</div>
          <div
            onClick={(): void => {
              this.props.toggleList("list");
              this.setState({ activeSlider: "list" });
            }}
            className="option option--list"
          >
            <div
              className={`option__logo option__logo--${
                this.state.activeSlider === "list" ? "active" : ""
              }`}
            >
              <svg height="24" viewBox="0 0 24 24" width="24">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
          <div
            onClick={(): void => {
              this.props.toggleList("cards");
              this.setState({ activeSlider: "cards" });
            }}
            className="option option--card"
          >
            <div
              className={`option__logo option__logo--${
                this.state.activeSlider === "cards" ? "active" : ""
              }`}
            >
              <svg height="24" viewBox="0 0 24 24" width="24">
                <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        <div onClick={this.handleModal} className="SidePannel__categories">
          Categories
        </div>
        {this.state.modal ? (
          <Categories modal={this.state.modal} removeModal={this.handleModal} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

interface LinkStateProps {
  firstName: string;
  lastName: string;
}

const mapStateToProps = (
  state: AppState,
  props: SidePannelProps
): LinkStateProps => ({
  firstName: state.AuthenticationReducer.first_name,
  lastName: state.AuthenticationReducer.last_name,
});

export default connect(mapStateToProps, { null: null })(SidePannel);
