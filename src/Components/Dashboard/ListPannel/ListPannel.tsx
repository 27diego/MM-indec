import React, { Component } from "react";
import "./ListPannel.scss";

interface Props {}
interface State {
  search: string;
  temp: Array<{}>;
}

class ListPannel extends Component<Props, State> {
  state = {
    search: "",
    temp: [
      {
        id: 0,
        dep: "Packing",
        title: "Temp1",
        cat: "chemical"
      },
      {
        id: 1,
        dep: "Packing",
        title: "Temp1",
        cat: "chemical"
      },
      {
        id: 2,
        dep: "Packing",
        title: "Temp1",
        cat: "chemical"
      },
      {
        id: 3,
        dep: "Packing",
        title: "Temp1",
        cat: "chemical"
      },
      {
        id: 4,
        dep: "Packing",
        title: "Temp1",
        cat: "chemical"
      },
      {
        id: 5,
        dep: "Packing",
        title: "Temp1",
        cat: "chemical"
      },
      {
        id: 6,
        dep: "Packing",
        title: "Temp1",
        cat: "chemical"
      },
      {
        id: 7,
        dep: "Packing",
        title: "Temp1",
        cat: "chemical"
      },
      {
        id: 8,
        dep: "Packing",
        title: "Temp1",
        cat: "chemical"
      },
      {
        id: 9,
        dep: "Packing",
        title: "Temp1",
        cat: "chemical"
      },
      {
        id: 10,
        dep: "Packing",
        title: "Temp1",
        cat: "chemical"
      },
      {
        id: 11,
        dep: "Packing",
        title: "Temp1",
        cat: "chemical"
      }
    ]
  };
  render() {
    return (
      <div className="Container--ListPannel ListPannel">
        <div className="ListPannel__header">SOP Index</div>
        <input
          className="ListPannel__search"
          type="text"
          value={this.state.search}
          onChange={(e): void => this.setState({ search: e.target.value })}
          placeholder="search"
        />

        <div className="ListPannel__list">
          {this.state.temp.map(item => (
            <div className="LPitem" key={item.id}>
              <div
                className={`LPitem__sideColor LPitem__sideColor--${item.cat}`}
              ></div>
              <div className="LPitem__header">{item.dep}</div>
              <div className="LPitem__title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListPannel;
