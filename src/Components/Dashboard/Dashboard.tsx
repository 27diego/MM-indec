import React from "react";
import "./Dashboard.scss";

import MenuPannel from "./MenuPannel/MenuPannel";

export const Dashboard = () => {
  return (
    <div className="Container--Dashboard">
      <div className="container--MenuPannel">
        <MenuPannel />
      </div>
    </div>
  );
};
