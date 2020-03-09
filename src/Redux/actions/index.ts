import history from "../../history";
import { AppActions } from "../../types/Actions";
import { Dispatch } from "redux";
import { AppState } from "../Store/configureStore";

export const signIn = (username: string, password: string) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch("http://localhost:3000/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data != null && typeof data === "object") {
          dispatch({ type: "SIGN_IN", payload: data });
          dispatch({ type: "ERROR", payload: "" });
          history.push("/Dashboard");
        } else {
          dispatch({ type: "ERROR", payload: data });
        }
      })
      .catch(err => console.log(err));
  };
};

export const signOut = () => {
  history.push("/");
  return {
    type: "SIGN_OUT"
  };
};

export const getUsers = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch("http://localhost:3000/user/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        if (data != null) {
          dispatch({ type: "GET_USERS", payload: data });
          dispatch({ type: "ERROR", payload: "" });
          // console.log("data is good: ", data);
        } else {
          dispatch({ type: "ERROR", payload: data });
          // console.log("data is not good: ", data[0]);
        }
      })
      .catch(err => console.log(err));
  };
};

export const postUser = (
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  admin: boolean,
  department: string
) => {
  fetch("http://localhost:3000/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      username,
      password,
      admin,
      department
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
