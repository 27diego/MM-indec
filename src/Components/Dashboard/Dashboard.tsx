import React from "react";
import "./Dashboard.scss";

import MenuPannel from "./MenuPannel/MenuPannel";
import ListPannel from "./ListPannel/ListPannel";

export const Dashboard = () => {
  return (
    <div className="Container--Dashboard">
      <div className="container--MenuPannel">
        <MenuPannel />
      </div>
      <div className="container--ListPannel">
        <ListPannel />
      </div>
      <div className="container--DocumentPannel"></div>
    </div>
  );
};
