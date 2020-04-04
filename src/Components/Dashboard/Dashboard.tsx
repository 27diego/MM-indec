import React, { useState } from "react";
import "./Dashboard.scss";

import MenuPannel from "./MenuPannel/MenuPannel";
import ListPannel from "./ListPannel/ListPannel";
import DocumentPannel from "./DocumentPannel/DocumentPannel";

import PDFExpand from "../../Portals/PDFExpand/PDFExpand";

class Dashboard extends React.Component {
  state = {
    department: "",
    PDFModal: false,
  };

  setDepartment = (item: string) => {
    this.setState({ department: item });
  };

  setPDFModal = (item: boolean) => {
    this.setState({ PDFModal: item });
  };

  render() {
    return (
      <div className="Container--Dashboard">
        <div className="container--MenuPannel">
          <MenuPannel toggleMenu={this.setDepartment} />
        </div>
        <div className="container--ListPannel">
          <ListPannel department={this.state.department} />
        </div>
        <div className="container--DocumentPannel">
          <DocumentPannel setModal={this.setPDFModal} />
        </div>

        {this.state.PDFModal ? (
          <PDFExpand removeModal={this.setPDFModal} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Dashboard;
