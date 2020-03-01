import React from "react";
import "./Login.scss";

import mountain from "../../images/longTrees.jpg";

export const Login = () => {
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
            Dont have an account? <a href="#">Sign Up</a>
          </p>
          <input
            type="text"
            placeholder="Your Username"
            className="form__username"
          />
          <input
            type="password"
            placeholder="Your Password"
            className="form__password"
          />
          <p className="form__forgot">Forgot Password?</p>
          <button className="btn--login">Sign In</button>
        </div>
      </div>
      <figure className="container--img">
        <img src={mountain} alt="Mountain" className="login__img" />
      </figure>
    </div>
  );
};
