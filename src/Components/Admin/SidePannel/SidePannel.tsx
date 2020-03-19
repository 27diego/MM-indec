import React, { Component, createRef } from "react";
import "./SidePannel.scss";

//Redux imports
import { connect } from "react-redux";
import { AppState } from "../../../Redux/Store/configureStore";

interface SidePannelState {
  avatar: string;
}

interface SidePannelProps {
  name: string;
  list: string;
  toggleList: (item: string) => void;
}

type Props = SidePannelProps & LinkStateProps;

class SidePannel extends Component<Props, SidePannelState> {
  private imgRef = createRef<HTMLImageElement>();

  constructor(props: Props) {
    super(props);

    fetch(
      `https://ui-avatars.com/api/?name=${this.props.firstName}+${this.props.lastName}&rounded=true&background=fff&color=0D8ABC`,
      {
        method: "GET"
      }
    ).then(response => {
      response.arrayBuffer().then(buffer => {
        var base64Flag = "data:image/jpeg;base64,";
        var imageStr = this.arrayBufferToBase64(buffer);

        this.imgRef.current!.src = `${base64Flag}${imageStr}`;
      });
    });
  }

  arrayBufferToBase64 = (buffer: ArrayBuffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach(b => (binary += String.fromCharCode(b)));

    return window.btoa(binary);
  };

  render() {
    return (
      <div className="Container--SidePannel SidePannel">
        <img className="SidePannel__avatar" ref={this.imgRef} alt="avatar" />
        <div className="SidePannel__actions">Actions</div>
        <div className="actions">
          <div
            onClick={() => this.props.toggleList("list")}
            className="actions__List"
          >
            List Mode
          </div>
          <div
            onClick={() => this.props.toggleList("cards")}
            className="actions__cards"
          >
            Cards Mode
          </div>
        </div>
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
  lastName: state.AuthenticationReducer.last_name
});

export default connect(mapStateToProps, { null: null })(SidePannel);
