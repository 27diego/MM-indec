import React, { Component } from "react";
import "./DocumentPannel.scss";
import pdffile from "./Vega.pdf";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface DocumentPannelProps {
  document: string;
}
interface DocumentPannelState {
  pageNumber: number;
}

class DocumentPannel extends Component<
  DocumentPannelProps,
  DocumentPannelState
> {
  state = {
    pageNumber: 1
  };

  render() {
    const { pageNumber } = this.state;
    return (
      <div className="Container--DocumentPannel">
        <div className="Document">hello document</div>
        <Document file={pdffile} onLoadError={console.error}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}

export default DocumentPannel;
