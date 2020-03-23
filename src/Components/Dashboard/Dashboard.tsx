import React, { useState } from "react";
import "./Dashboard.scss";

import MenuPannel from "./MenuPannel/MenuPannel";
import ListPannel from "./ListPannel/ListPannel";
import DocumentPannel from "./DocumentPannel/DocumentPannel";

export const Dashboard = () => {
  const [department, setdepartment] = useState("");
  const [document, setDocument] = useState("");

  return (
    <div className="Container--Dashboard">
      <div className="container--MenuPannel">
        <MenuPannel toggleMenu={setdepartment} />
      </div>
      <div className="container--ListPannel">
        <ListPannel department={department} setDocument={setDocument} />
      </div>
      <div className="container--DocumentPannel">
        <DocumentPannel document={document} />
      </div>
    </div>
  );
};
