import pdffile from "./Vega.pdf";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./PDFExpand.scss";
import Overlay from "../Overlay/Overlay";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const modal = document.querySelector("#modal") as HTMLElement;

interface DocumentPannelProps {
  removeModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface DocumentPannelState {
  pageNumber: number;
  fileURL: any;
}

class PDFExpand extends Component<DocumentPannelProps, DocumentPannelState> {
  portal: HTMLElement = document.createElement("div");

  state = {
    pageNumber: 1,
    fileURL: ""
  };

  componentDidMount() {
    modal.appendChild(this.portal);
  }

  componentWillUnmount() {
    modal.removeChild(this.portal);
  }

  handleRemove = () => {
    this.props.removeModal(false);
  };

  render() {
    const { pageNumber } = this.state;
    return ReactDOM.createPortal(
      <div className="Container--DocumentModal DocumentModal">
        <Document
          file={pdffile}
          onLoadError={console.error}
          className="document"
        >
          <div className="DocumentModal__document">
            <Page
              pageNumber={pageNumber}
              height={900}
              width={900}
              className="DocumentModal__img"
            />
          </div>
        </Document>
        <Overlay removeModal={this.handleRemove} />
      </div>,
      this.portal
    );
  }
}

export default PDFExpand;
