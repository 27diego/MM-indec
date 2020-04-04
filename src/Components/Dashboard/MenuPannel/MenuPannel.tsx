import React, { Component } from "react";
import "./MenuPannel.scss";

//Redux imports
import { connect } from "react-redux";
import {
  signOut,
  selectMenu,
  filterDocumentsByDepartment,
} from "../../../Redux/actions/index";
import { AppActions } from "../../../types/Actions";
import { AppState } from "../../../Redux/Store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

import NewItem from "../../../Portals/newModal/NewItem";

import history from "../../../history";
import { User } from "../../../types/User";

interface MenuPannelPROPS {
  toggleMenu: (item: string) => void;
}
interface MenuPannelSTATE {
  active: string;
  menu: boolean;
  tag: boolean;
  modal: boolean;
}

type Props = MenuPannelPROPS & LinkDispatchProps & LinkStateProps;

class MenuPannel extends Component<Props, MenuPannelSTATE> {
  state = {
    active: "",
    menu: false,
    tag: false,
    modal: false,
  };

  removeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { active } = this.state;
    const { toggleMenu } = this.props;

    return (
      <div
        className="Container--MenuPannel MenuPannel"
        onClick={() => (this.state.menu ? this.setState({ menu: false }) : "")}
      >
        <div className="Mheader">
          <div className="Mheader__container">
            <div className="Mheader__title">Departments</div>
            {this.props.user ? (
              this.props.user.admin ? (
                <div
                  onClick={(): void => {
                    this.props.selectMenu("Department");
                    this.setState({ modal: true });
                  }}
                  className="logo--container"
                >
                  <div className="addButton__logo">&nbsp;</div>
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="deps--container">
          <div
            className={`deps deps--QA deps--QA--${
              active === "QA" ? "active" : ""
            }`}
            onClick={(): void => {
              this.setState((prevState) => ({
                active: prevState.active === "QA" ? "" : "QA",
              }));
              toggleMenu("QA");
              this.props.filterDocumentsByDepartment("QA");
            }}
          >
            <div className="deps__title">QA</div>
            <div className="deps__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <path
                  d="M352,128c-32.26-2.89-64,16-96,16s-63.75-19-96-16c-64,6-96,64-96,160,0,80,64,192,111.2,192s51.94-24,80.8-24,33.59,24,80.8,24S448,368,448,288C448,192,419,134,352,128Z"
                  style={{
                    fill: "#000",
                    stroke: "#fff",
                    strokeMiterlimit: 10,
                    strokeWidth: "32px",
                  }}
                />
                <path
                  fill="#fff"
                  d="M323.92,83.14c-21,21-45.66,27-58.82,28.79A8,8,0,0,1,256,103.2a97.6,97.6,0,0,1,28.61-59.33c22-22,46-26.9,58.72-27.85A8,8,0,0,1,352,24.94,98,98,0,0,1,323.92,83.14Z"
                />
                <ellipse cx="216" cy="304" rx="24" ry="48" fill="#fff" />
                <ellipse cx="296" cy="304" rx="24" ry="48" fill="#fff" />
              </svg>
            </div>
          </div>
          <div
            className={`deps deps--Packing deps--Packing--${
              active === "Packing" ? "active" : ""
            }`}
            onClick={(): void => {
              this.setState((prevState) => ({
                active: prevState.active === "Packing" ? "" : "Packing",
              }));
              toggleMenu("Packing");
              this.props.filterDocumentsByDepartment("Packing");
            }}
          >
            <div className="deps__title">Packing</div>
            <div className="deps__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <title>ionicons-v5-h</title>
                <path
                  d="M448,341.37V170.61A32,32,0,0,0,432.11,143l-152-88.46a47.94,47.94,0,0,0-48.24,0L79.89,143A32,32,0,0,0,64,170.61V341.37A32,32,0,0,0,79.89,369l152,88.46a48,48,0,0,0,48.24,0l152-88.46A32,32,0,0,0,448,341.37Z"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                <polyline
                  points="69 153.99 256 263.99 443 153.99"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                2
                <line
                  x1="256"
                  y1="463.99"
                  x2="256"
                  y2="263.99"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
              </svg>
            </div>
          </div>
          <div
            className={`deps deps--Harvesting deps--Harvesting--${
              active === "Harvesting" ? "active" : ""
            }`}
            onClick={(): void => {
              this.setState((prevState) => ({
                active: prevState.active === "Harvesting" ? "" : "Harvesting",
              }));
              toggleMenu("Harvesting");
              this.props.filterDocumentsByDepartment("Harvesting");
            }}
          >
            <div className="deps__title">Harvesting</div>
            <div className="deps__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <title>ionicons-v5-o</title>
                <path
                  d="M321.89,171.42C233,114,141,155.22,56,65.22c-19.8-21-8.3,235.5,98.1,332.7C231.89,468.92,352,461,392.5,392S410.78,228.83,321.89,171.42Z"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                <path
                  d="M173,253c86,81,175,129,292,147"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
              </svg>
            </div>
          </div>
          <div
            className={`deps deps--Growing deps--Growing--${
              active === "Growing" ? "active" : ""
            }`}
            onClick={(): void => {
              this.setState((prevState) => ({
                active: prevState.active === "Growing" ? "" : "Growing",
              }));
              toggleMenu("Growing");
              this.props.filterDocumentsByDepartment("Growing");
            }}
          >
            <div className="deps__title">Growing</div>
            <div className="deps__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <title>ionicons-v5-p</title>
                <path
                  d="M416,128c-18.9,4.25-36.8,8.94-53.7,13.95-40.5,12-75.5,27.15-105.4,41.65-19.3,9.37-26.2,13.51-51.5,28.23C147,245.52,112,289.23,112,354.64,112,428.55,167.6,480,256,480s144-55.81,144-129.72S339,225.24,416,128Z"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                <path
                  d="M264,180.19c-19.69-27-38.2-38.69-52.7-46.59C162.6,107.1,96,96,96,96c41.5,43.7,37.2,90.1,32,128,0,0-3.87,32.88,1.91,58.41"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                <path
                  d="M372,139.15C356.55,102.6,336,64,336,64s-63.32,0-135.69,64"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                <path
                  d="M253.48,87.57C221.25,45.81,176,32,176,32c-15.3,20.8-28.79,51.58-34.87,74.17"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
              </svg>
            </div>
          </div>

          <div
            className={`deps deps--Maintenance deps--Maintenance--${
              active === "Maintenance" ? "active" : ""
            }`}
            onClick={(): void => {
              this.setState((prevState) => ({
                active: prevState.active === "Maintenance" ? "" : "Maintenance",
              }));
              toggleMenu("Maintenance");
              this.props.filterDocumentsByDepartment("Maintenance");
            }}
          >
            <div className="deps__title">Maintenance</div>
            <div className="deps__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <title>ionicons-v5-i</title>
                <path
                  d="M277.42,247a24.68,24.68,0,0,0-4.08-5.47L255,223.44a21.63,21.63,0,0,0-6.56-4.57,20.93,20.93,0,0,0-23.28,4.27c-6.36,6.26-18,17.68-39,38.43C146,301.3,71.43,367.89,37.71,396.29a16,16,0,0,0-1.09,23.54l39,39.43a16.13,16.13,0,0,0,23.67-.89c29.24-34.37,96.3-109,136-148.23,20.39-20.06,31.82-31.58,38.29-37.94A21.76,21.76,0,0,0,277.42,247Z"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                <path
                  d="M478.43,201l-34.31-34a5.44,5.44,0,0,0-4-1.59,5.59,5.59,0,0,0-4,1.59h0a11.41,11.41,0,0,1-9.55,3.27c-4.48-.49-9.25-1.88-12.33-4.86-7-6.86,1.09-20.36-5.07-29a242.88,242.88,0,0,0-23.08-26.72c-7.06-7-34.81-33.47-81.55-52.53a123.79,123.79,0,0,0-47-9.24c-26.35,0-46.61,11.76-54,18.51-5.88,5.32-12,13.77-12,13.77A91.29,91.29,0,0,1,202.35,77a79.53,79.53,0,0,1,23.28-1.49C241.19,76.8,259.94,84.1,270,92c16.21,13,23.18,30.39,24.27,52.83.8,16.69-15.23,37.76-30.44,54.94a7.85,7.85,0,0,0,.4,10.83l21.24,21.23a8,8,0,0,0,11.14.1c13.93-13.51,31.09-28.47,40.82-34.46s17.58-7.68,21.35-8.09A35.71,35.71,0,0,1,380.08,194a13.65,13.65,0,0,1,3.08,2.38c6.46,6.56,6.07,17.28-.5,23.74l-2,1.89a5.5,5.5,0,0,0,0,7.84l34.31,34a5.5,5.5,0,0,0,4,1.58,5.65,5.65,0,0,0,4-1.58L478.43,209A5.82,5.82,0,0,0,478.43,201Z"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
              </svg>
            </div>
          </div>
          <div
            className={`deps deps--Safety deps--Safety--${
              active === "Safety" ? "active" : ""
            }`}
            onClick={(): void => {
              this.setState((prevState) => ({
                active: prevState.active === "Safety" ? "" : "Safety",
              }));
              toggleMenu("Safety");
              this.props.filterDocumentsByDepartment("Safety");
            }}
          >
            <div className="deps__title">Safety</div>
            <div className="deps__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <title>ionicons-v5-i</title>
                <path
                  d="M277.42,247a24.68,24.68,0,0,0-4.08-5.47L255,223.44a21.63,21.63,0,0,0-6.56-4.57,20.93,20.93,0,0,0-23.28,4.27c-6.36,6.26-18,17.68-39,38.43C146,301.3,71.43,367.89,37.71,396.29a16,16,0,0,0-1.09,23.54l39,39.43a16.13,16.13,0,0,0,23.67-.89c29.24-34.37,96.3-109,136-148.23,20.39-20.06,31.82-31.58,38.29-37.94A21.76,21.76,0,0,0,277.42,247Z"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                <path
                  d="M478.43,201l-34.31-34a5.44,5.44,0,0,0-4-1.59,5.59,5.59,0,0,0-4,1.59h0a11.41,11.41,0,0,1-9.55,3.27c-4.48-.49-9.25-1.88-12.33-4.86-7-6.86,1.09-20.36-5.07-29a242.88,242.88,0,0,0-23.08-26.72c-7.06-7-34.81-33.47-81.55-52.53a123.79,123.79,0,0,0-47-9.24c-26.35,0-46.61,11.76-54,18.51-5.88,5.32-12,13.77-12,13.77A91.29,91.29,0,0,1,202.35,77a79.53,79.53,0,0,1,23.28-1.49C241.19,76.8,259.94,84.1,270,92c16.21,13,23.18,30.39,24.27,52.83.8,16.69-15.23,37.76-30.44,54.94a7.85,7.85,0,0,0,.4,10.83l21.24,21.23a8,8,0,0,0,11.14.1c13.93-13.51,31.09-28.47,40.82-34.46s17.58-7.68,21.35-8.09A35.71,35.71,0,0,1,380.08,194a13.65,13.65,0,0,1,3.08,2.38c6.46,6.56,6.07,17.28-.5,23.74l-2,1.89a5.5,5.5,0,0,0,0,7.84l34.31,34a5.5,5.5,0,0,0,4,1.58,5.65,5.65,0,0,0,4-1.58L478.43,209A5.82,5.82,0,0,0,478.43,201Z"
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="MenuFooter">
          {this.props.user.admin ? (
            <React.Fragment>
              <div
                className="MenuFooter__menu"
                style={{ display: this.state.menu ? "flex" : "none" }}
              >
                <div
                  onClick={(): void => history.push("/Admin")}
                  className="MenuFooter__menu__users"
                >
                  Manage Users
                </div>
              </div>
              <button
                className="MenuFooter__add"
                onClick={(): void =>
                  this.setState((prevState) => ({ menu: !prevState.menu }))
                }
              >
                <div className="MenuFooter__add__icon">&nbsp;</div>
              </button>
            </React.Fragment>
          ) : (
            ""
          )}

          {this.props.user.first_name ? (
            <React.Fragment>
              <div
                className="MenuFooter__logOut__tag"
                style={{ display: this.state.tag ? "block" : "none" }}
              >
                LogOut
              </div>

              <div
                className="MenuFooter__logOut deps__icon"
                onMouseOver={(): void => this.setState({ tag: true })}
                onMouseLeave={(): void => this.setState({ tag: false })}
                onClick={(): void => this.props.signOut()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <title>ionicons-v5-o</title>
                  <path
                    d="M304,336v40a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V136a40,40,0,0,1,40-40H256c22.09,0,48,17.91,48,40v40"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "32px",
                    }}
                  />
                  <polyline
                    points="368 336 448 256 368 176"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "32px",
                    }}
                  />
                  <line
                    x1="176"
                    y1="256"
                    x2="432"
                    y2="256"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "32px",
                    }}
                  />
                </svg>
              </div>
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
        {this.state.modal ? (
          <NewItem removeModal={this.removeModal} modal={this.state.modal} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

interface LinkStateProps {
  user: User;
}
interface LinkDispatchProps {
  signOut: () => void;
  selectMenu: (item: string) => void;
  filterDocumentsByDepartment: (item: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: MenuPannelPROPS
): LinkStateProps => ({
  user: state.AuthenticationReducer,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: MenuPannelPROPS
): LinkDispatchProps => ({
  signOut: bindActionCreators(signOut, dispatch),
  selectMenu: bindActionCreators(selectMenu, dispatch),
  filterDocumentsByDepartment: bindActionCreators(
    filterDocumentsByDepartment,
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuPannel);
