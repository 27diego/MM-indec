import React, { Component, createRef } from "react";
import "./UserCard.scss";

interface UserCardProps {
  firstName: string;
  lastName: string;
  userName: string;
  department: string;
}

interface UserCardState {
  label: boolean;
}

class UserCard extends Component<UserCardProps, UserCardState> {
  private imgRef = createRef<HTMLImageElement>();

  constructor(props: UserCardProps) {
    super(props);

    this.state = {
      label: false
    };

    fetch(
      "https://ui-avatars.com/api/?name=Diego+Vega&rounded=true&background=fff&color=0D8ABC",
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
        <div className="userCard__name">Diego Vega</div>
        <div className="userCard__userName">dvega</div>
        <div className="userCard__department">QA</div>
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
        </div>
        <div
          className={`userCard__label userCard__label--${
            this.state.label ? "active" : ""
          }`}
        >
          <div>Edit</div>
          <div>Delete</div>
        </div>
      </div>
    );
  }
}
export default UserCard;
