import React, { Component } from "react";
import "./DropZone.scss";

import Overlay from "../../Overlay/Overlay";

interface Props {
  modal: boolean;
  removeModal: () => void;
}

interface State {}

class DropZone extends Component<Props, State> {
  private myRef: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div
        className={`modal modal--${
          this.props.modal ? "active" : "deactive"
        } documentModal `}
        onDragOver={() => console.log("dragging over")}
      >
        <div className="dropzone">
          <svg
            className="dropzone__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <title>ionicons-v5-f</title>
            <path
              d="M320,367.79h76c55,0,100-29.21,100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69,0-113.44,45.79-128,91.2-60,5.7-112,43.88-112,106.4s54,106.4,120,106.4h56"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px"
              }}
            />
            <polyline
              points="320 255.79 256 191.79 192 255.79"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px"
              }}
            />
            <line
              x1="256"
              y1="448.21"
              x2="256"
              y2="207.79"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px"
              }}
            />
          </svg>
          <input
            type="file"
            ref={this.myRef}
            multiple
            style={{ display: "none" }}
          />
          <div className="dropzone__prompt">Drag and drop your file here</div>
          <div className="dropzone__or">OR</div>
          <button
            onClick={(): void => this.myRef.current?.click()}
            className="dropzone__btn"
          >
            Browse Files
          </button>
        </div>
        <input
          type="text"
          placeholder="title"
          className="documentModal__title"
        />

        <select className="documentModal__category">
          <option value="">categories</option>
        </select>
        <select className="documentModal__department">
          <option value="">department</option>
        </select>

        <button className="documentModal__confirm">OK</button>
        <button
          onClick={this.props.removeModal}
          className="documentModal__cancel"
        >
          Cancel
        </button>

        {this.props.modal ? (
          <Overlay removeModal={this.props.removeModal} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default DropZone;
