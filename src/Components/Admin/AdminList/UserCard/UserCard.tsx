import React, { Component, createRef } from "react";
import "./UserCard.scss";

import { connect } from "react-redux";
import { deleteUser } from "../../../../Redux/actions/index";
import { AppActions } from "../../../../types/Actions";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

interface UserCardProps {
  firstName: string;
  lastName: string;
  userName: string;
  department: string;
}

interface UserCardState {
  label: boolean;
}

type Props = UserCardProps & LinkDispatchProps;

class UserCard extends Component<Props, UserCardState> {
  private imgRef = createRef<HTMLImageElement>();

  constructor(props: Props) {
    super(props);

    this.state = {
      label: false
    };

    fetch(
      `https://ui-avatars.com/api/?name=${this.props.firstName}+${this.props.lastName}&rounded=true&background=fff&color=0D8ABC`,
      {
        method: "GET"
      }
    ).then(response => {
      response.arrayBuffer().then(buffer => {
        var base64Flag = "data:image/jpeg;base64,";
        var imageStr = this.arrayBufferToBase64(buffer);

        this.imgRef.current!.src = `${base64Flag}${imageStr}`;
      });
    });
  }

  arrayBufferToBase64 = (buffer: ArrayBuffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach(b => (binary += String.fromCharCode(b)));

    return window.btoa(binary);
  };

  render() {
    return (
      <div className="userCard">
        <img className="userCard__avatar" ref={this.imgRef} alt="avatar" />
        <div className="userCard__name">{`Name: ${this.props.firstName} ${this.props.lastName}`}</div>
        <div className="userCard__department">
          Department: {this.props.department}
        </div>
        <div className="userCard__userName">
          Username: {this.props.userName}
        </div>
        <div
          onClick={() =>
            this.setState(prevState => ({ label: !prevState.label }))
          }
          className="userCard__menu"
        >
          <div
            className={`userCard__menu__lines userCard__menu__lines--${
              this.state.label ? "active" : ""
            }`}
          ></div>
          <div
            className={`userCard__label userCard__label--${
              this.state.label ? "active" : ""
            }`}
          >
            <div>Edit</div>
            <div
              onClick={() =>
                this.props.deleteUser(
                  this.props.firstName,
                  this.props.lastName,
                  this.props.userName
                )
              }
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface LinkDispatchProps {
  deleteUser: (first_name: string, last_name: string, username: string) => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: UserCardProps
): LinkDispatchProps => ({
  deleteUser: bindActionCreators(deleteUser, dispatch)
});

export default connect(null, mapDispatchToProps)(UserCard);
