import React, { Component } from "react";
import "./DocumentPannel.scss";

//Redux imports
import { connect } from "react-redux";
import { AppState } from "../../../Redux/Store/configureStore";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface DocumentPannelProps {
  setModal: (item: boolean) => void;
}
interface DocumentPannelState {
  pageNumber: number;
  fileURL: any;
}

type Props = DocumentPannelProps & LinkStateProps;

class DocumentPannel extends Component<Props, DocumentPannelState> {
  state = {
    pageNumber: 1,
    fileURL: "",
  };

  render() {
    const { pageNumber } = this.state;
    return (
      <div
        onClick={() =>
          this.props.document !== "" ? this.props.setModal(true) : ""
        }
        className="Container--DocumentPannel DocumentPannel"
      >
        <div className="DocumentPannel__document">
          <Document
            file={this.props.document}
            onLoadError={console.error}
            className="center"
          >
            <Page
              pageNumber={pageNumber}
              scale={0.85}
              className="DocumentPannel__page"
            />
          </Document>
        </div>
      </div>
    );
  }
}

interface LinkStateProps {
  document: string;
}

const mapStateToProps = (
  state: AppState,
  ownProps: DocumentPannelProps
): LinkStateProps => ({
  document: state.DisplayDocumentReducer,
});

export default connect(mapStateToProps, { null: null })(DocumentPannel);
