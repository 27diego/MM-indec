import React from "react";
import "./Login.scss";
import mountain from "../../images/longTrees.jpg";

//Redux imports
import { connect } from "react-redux";
import { signIn } from "../../Redux/actions/index";
import { AppActions } from "../../types/Actions";
import { AppState } from "../../Redux/Store/configureStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

interface LoginPageProps {
  id?: string;
  color?: string;
}

interface LoginPageState {
  username: string;
  password: string;
}

type Props = LoginPageProps & LinkDispatchProps & LinkStateProps;

class Login extends React.Component<Props, LoginPageState> {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = (): void => {
    const { username, password } = this.state;
    this.props.signIn(username, password);
  };

  render() {
    if (this.props.error !== "") {
      console.log("There is an Error!!!!: ", this.props.error);
    }

    return (
      <div className="Container--Login">
        <div className="border--container border--container--1">
          <div className="border--login border--login--1">&nbsp;</div>
        </div>
        <div className="border--container border--container--2">
          <div className="border--login border--login--2">&nbsp;</div>
        </div>
        <div className="login">
          <div className="form">
            <div className="form__greeting">SOP Index.</div>
            <p className="form__signup">
              Dont have an account? <a href="/Dashboard">Sign Up</a>
            </p>
            <input
              value={this.state.username}
              onChange={(e): void => {
                this.setState({ username: e.target.value });
              }}
              type="text"
              placeholder="Your Username"
              className="form__username"
              required={true}
            />
            <input
              value={this.state.password}
              onChange={(e): void => {
                this.setState({ password: e.target.value });
              }}
              type="password"
              placeholder="Your Password"
              className="form__password"
              required={true}
            />
            {this.props.error !== "" ? (
              <div className="form__error">
                <p>{this.props.error}</p>
              </div>
            ) : (
              ""
            )}
            <p className="form__forgot">Forgot Password?</p>
            <button onClick={this.handleSubmit} className="btn--login">
              Sign In
            </button>
          </div>
        </div>
        <figure className="container--img">
          <img src={mountain} alt="Mountain" className="login__img" />
        </figure>
      </div>
    );
  }
}

interface LinkStateProps {
  error: string;
}

interface LinkDispatchProps {
  signIn: (username: string, password: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: LoginPageProps
): LinkStateProps => ({
  error: state.ErrorReducer
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: LoginPageProps
): LinkDispatchProps => ({
  signIn: bindActionCreators(signIn, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
