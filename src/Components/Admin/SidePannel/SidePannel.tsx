import React, { Component, createRef } from "react";
import "./SidePannel.scss";

interface SidePannelState {
  avatar: string;
}

interface SidePannelProps {
  name: string;
  list: string;
  toggleList: (item: string) => void;
}

class SidePannel extends Component<SidePannelProps, SidePannelState> {
  private imgRef = createRef<HTMLImageElement>();

  constructor(props: SidePannelProps) {
    super(props);

    fetch(
      "https://ui-avatars.com/api/?name=Diego+Vega&rounded=true&background=fff&color=0D8ABC",
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

export default SidePannel;
