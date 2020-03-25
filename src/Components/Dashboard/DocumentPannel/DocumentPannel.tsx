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
  fileURL: any;
}

class DocumentPannel extends Component<
  DocumentPannelProps,
  DocumentPannelState
> {
  state = {
    pageNumber: 1,
    fileURL: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/file/AIR_SOP", {
      method: "GET"
    })
      .then((res: any) => {
        const file = new Blob([res.data], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(file);
        console.log(fileURL);
        this.setState({ fileURL: fileURL });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { pageNumber } = this.state;
    return (
      <div className="Container--DocumentPannel DocumentPannel">
        <div className="DocumentPannel__document">
          <div className="Document">hello document</div>
          {/* <Document file={pdffile} onLoadError={console.error}>
            <Page pageNumber={pageNumber} />
          </Document> */}
        </div>
      </div>
    );
  }
}

export default DocumentPannel;
