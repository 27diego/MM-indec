import React, { Component } from "react";
import "./SidePannel.scss";

interface SidePannelState {
  avatar: string;
}

interface SidePannelProps {
  name: string;
  list: boolean;
  toggleList: () => void;
}

class SidePannel extends Component<SidePannelProps, SidePannelState> {
  constructor(props: SidePannelProps) {
    super(props);

    this.state = {
      avatar: ""
    };
  }

  render() {
    return <div className="Container--SidePannel">Hello SidePannel</div>;
  }
}

export default SidePannel;
