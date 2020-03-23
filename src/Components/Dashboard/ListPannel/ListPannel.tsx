import React, { Component } from "react";
import "./ListPannel.scss";

//Redux imports
import { connect } from "react-redux";
import { getDocuments } from "../../../Redux/actions/index";
import { AppActions } from "../../../types/Actions";
import { AppState } from "../../../Redux/Store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { Document } from "../../../types/Document";

interface ListPannelProps {
  department: string;
  setDocument: (item: string) => void;
}
interface ListPannelState {
  search: string;
  temp: Array<{}>;
}

type Props = ListPannelProps & LinkStateProps & LinkDispatchProps;

class ListPannel extends Component<Props, ListPannelState> {
  state = {
    search: "",
    temp: [
      {
        id: 0,
        dep: "Packing",
        title: "Temp1",
        cat: "Chemical"
      },
      {
        id: 1,
        dep: "Packing",
        title: "Temp1",
        cat: "Chemical"
      },
      {
        id: 2,
        dep: "Packing",
        title: "Temp1",
        cat: "Chemical"
      },
      {
        id: 3,
        dep: "Packing",
        title: "Temp1",
        cat: "Chemical"
      },
      {
        id: 4,
        dep: "Packing",
        title: "Temp1",
        cat: "Chemical"
      },
      {
        id: 5,
        dep: "Packing",
        title: "Temp1",
        cat: "Chemical"
      },
      {
        id: 6,
        dep: "Packing",
        title: "Temp1",
        cat: "Chemical"
      },
      {
        id: 7,
        dep: "Packing",
        title: "Temp1",
        cat: "Chemical"
      },
      {
        id: 8,
        dep: "Packing",
        title: "Temp1",
        cat: "Chemical"
      },
      {
        id: 9,
        dep: "Packing",
        title: "Temp1",
        cat: "Chemical"
      },
      {
        id: 10,
        dep: "Packing",
        title: "Temp1",
        cat: "Chemical"
      },
      {
        id: 11,
        dep: "Packing",
        title: "Temp1",
        cat: "Chemical"
      }
    ]
  };

  componentDidMount() {
    this.props.getDocuments();
  }

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
          {this.props.Documents.map(item => (
            <div
              className="LPitem"
              key={item.title}
              onClick={(): void => this.props.setDocument(item.title)}
            >
              <div
                className={`LPitem__sideColor LPitem__sideColor--${item.category}`}
              ></div>
              <div className="LPitem__header">{item.department}</div>
              <div className="LPitem__title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

interface LinkStateProps {
  Documents: Document[];
}
interface LinkDispatchProps {
  getDocuments: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: ListPannelProps
): LinkStateProps => ({
  Documents: state.DocumentReducer
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: ListPannelProps
): LinkDispatchProps => ({
  getDocuments: bindActionCreators(getDocuments, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPannel);
