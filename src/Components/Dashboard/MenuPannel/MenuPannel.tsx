import React, { Component } from "react";
import "./MenuPannel.scss";

interface MenuPannelProps {}
interface MenuPannelState {}

type Props = MenuPannelProps;

class MenuPannel extends Component<Props, MenuPannelState> {
  render() {
    return (
      <div className="Container--MenuPannel MenuPannel">
        <div className="MenuPannel__header">Departments</div>
      </div>
    );
  }
}

export default MenuPannel;
