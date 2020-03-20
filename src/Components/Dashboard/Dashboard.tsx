import React, { useState } from "react";
import "./Dashboard.scss";

import MenuPannel from "./MenuPannel/MenuPannel";
import ListPannel from "./ListPannel/ListPannel";

interface DashboardProps {}
interface DashboardState {
  department: string;
}

export const Dashboard = () => {
  const [department, setdepartment] = useState("");

  console.log(department);

  return (
    <div className="Container--Dashboard">
      <div className="container--MenuPannel">
        <MenuPannel toggleMenu={setdepartment} />
      </div>
      <div className="container--ListPannel">
        <ListPannel department={department} />
      </div>
      <div className="container--DocumentPannel"></div>
    </div>
  );
};
