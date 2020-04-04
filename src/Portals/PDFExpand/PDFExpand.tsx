import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./PDFExpand.scss";
import Overlay from "../Overlay/Overlay";

//Redux imports
import { connect } from "react-redux";
import { AppState } from "../../Redux/Store/configureStore";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const modal = document.querySelector("#modal") as HTMLElement;

interface PDFExpandProps {
  removeModal: (item: boolean) => void;
}
interface PDFExpandState {
  pageNumber: number;
  fileURL: any;
}

type Props = PDFExpandProps & LinkStateToProps;

class PDFExpand extends Component<Props, PDFExpandState> {
  portal: HTMLElement = document.createElement("div");

  state = {
    pageNumber: 1,
    fileURL: "",
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
          file={this.props.document}
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

interface LinkStateToProps {
  document: string;
}

const mapStateToProps = (
  state: AppState,
  ownProps: PDFExpandProps
): LinkStateToProps => ({
  document: state.DisplayDocumentReducer,
});

export default connect(mapStateToProps, { null: null })(PDFExpand);
