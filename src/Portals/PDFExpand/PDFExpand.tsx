import pdffile from "./Vega.pdf";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./PDFExpand.scss";
import Overlay from "../Overlay/Overlay";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const modal = document.querySelector("#modal") as HTMLElement;

interface DocumentPannelProps {}
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

  render() {
    const { pageNumber } = this.state;
    return ReactDOM.createPortal(
      <div className="Container--DocumentModal DocumentModal">
        <div className="DocumentModal__document">
          <Document file={pdffile} onLoadError={console.error}>
            <Page pageNumber={pageNumber} scale={1.3} />
          </Document>
        </div>
        <Overlay />
      </div>,
      this.portal
    );
  }
}

export default PDFExpand;
