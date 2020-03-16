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
        if (data != null && Array.isArray(data)) {
          dispatch({ type: "GET_USERS", payload: data });
          dispatch({ type: "ERROR", payload: "" });
        } else {
          dispatch({ type: "ERROR", payload: data });
        }
      })
      .catch(err => console.log(err));
  };
};

export const postUser = async (
  first_name: string,
  last_name: string,
  username: string,
  password: string,
  admin: boolean,
  department: string
) => {
  await fetch("http://localhost:3000/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name,
      last_name,
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

export const deleteUser = (
  first_name: string,
  last_name: string,
  username: string
) => {
  fetch("http://localhost:3000/user", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name,
      last_name,
      username
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

export const selectMenu = (item: string) => {
  return {
    type: "SET_MENU_ITEM",
    payload: item
  };
};

export const getDepartments = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch("http://localhost:3000/department/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        if (data != null && Array.isArray(data)) {
          dispatch({ type: "GET_DEPARTMENTS", payload: data });
          dispatch({ type: "ERROR", payload: "" });
        } else {
          dispatch({ type: "ERROR", payload: data });
        }
      })
      .catch(err => console.log(err));
  };
};

export const deleteDepartment = (department: string) => {
  fetch("http://localhost:3000/department", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ department })
  })
    .then(res => res.json())
    .then(data => console.log(data));
};

export const postDepartment = (department: string) => {
  fetch("http://localhost:3000/department", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ department })
  })
    .then(res => res.json())
    .then(data => console.log(data));
};
