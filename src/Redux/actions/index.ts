import history from "../../history";
import { AppActions, GET_DOCUMENT } from "../../types/Actions";
import { Dispatch } from "redux";
import { AppState } from "../Store/configureStore";

import { GET_DOCUMENTS } from "../../types/Actions";
import { ThunkDispatch } from "redux-thunk";

export const signIn = (username: string, password: string) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch("http://localhost:3000/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data != null && typeof data === "object") {
          dispatch({ type: "SIGN_IN", payload: data });
          dispatch({ type: "ERROR", payload: "" });
          history.push("/Dashboard");
        } else {
          dispatch({ type: "ERROR", payload: data });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const signOut = () => {
  history.push("/");
  return {
    type: "SIGN_OUT",
  };
};

export const getUsers = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch("http://localhost:3000/user/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data != null && Array.isArray(data)) {
          dispatch({ type: "GET_USERS", payload: data });
          dispatch({ type: "ERROR", payload: "" });
        } else {
          dispatch({ type: "ERROR", payload: data });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const filterUsers = (item: string) => {
  return {
    type: "FILTER_USERS",
    payload: item,
  };
};

export const postUser = (
  first_name: string,
  last_name: string,
  username: string,
  password: string,
  admin: boolean,
  department: string
) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        password,
        admin,
        department,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data != null) {
          dispatch({ type: "ADD_USER", payload: data });
          dispatch({ type: "ERROR", payload: "" });
        } else {
          dispatch({ type: "ERROR", payload: data });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (
  first_name: string,
  last_name: string,
  username: string
) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch("http://localhost:3000/user", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name,
        last_name,
        username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data != null) {
          dispatch({ type: "DELETE_USER", payload: data });
          dispatch({ type: "ERROR", payload: "" });
        } else {
          dispatch({ type: "ERROR", payload: data });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const selectMenu = (item: string) => {
  return {
    type: "SET_MENU_ITEM",
    payload: item,
  };
};

export const getDepartments = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch("http://localhost:3000/department/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data != null && Array.isArray(data)) {
          dispatch({ type: "GET_DEPARTMENTS", payload: data });
          dispatch({ type: "ERROR", payload: "" });
        } else {
          dispatch({ type: "ERROR", payload: data });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const deleteDepartment = (department: string) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch("http://localhost:3000/department", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ department }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data from back end: ", data);
        if (data != null) {
          dispatch({ type: "REMOVE_DEPARTMENT", payload: data.department });
          dispatch({ type: "ERROR", payload: "" });
        } else {
          dispatch({ type: "ERROR", payload: "" });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const postDepartment = (department: string) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch("http://localhost:3000/department", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ department }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data != null) {
          dispatch({ type: "ADD_DEPARTMENT", payload: department });
          dispatch({ type: "ERROR", payload: "" });
        } else {
          dispatch({ type: "ERROR", payload: data });
        }
      });
  };
};

export const getDocuments = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch("http://localhost:3000/files", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data != null) {
          dispatch({ type: "GET_DOCUMENTS", payload: data });
          dispatch({ type: "ERROR", payload: "" });
        } else {
          dispatch({ type: "ERROR", payload: data });
        }
      });
  };
};

export const deleteDocument = (title: string) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch("http://localhost:3000/file", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data != null) {
          dispatch({ type: "DELETE_DOCUMENT", payload: data });
          dispatch({ type: "ERROR", payload: "" });
        } else {
          dispatch({ type: "ERROR", payload: data });
        }
      });
  };
};

export const filterDocuments = (item: string) => {
  return {
    type: "FILTER_DOCUMENTS",
    payload: item,
  };
};

export const filterDocumentsByDepartment = (item: string) => {
  return {
    type: "FILTER_DOCUMENTS_DEPARTMENT",
    payload: item,
  };
};

export const setDocument = (item: string) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    await fetch(`http://localhost:3000/file/${item}`, {
      method: "GET",
    })
      .then((res) => res.blob())
      .then((res) => {
        const fileUrl = URL.createObjectURL(res);
        dispatch({ type: "SET_DOCUMENT", payload: fileUrl });
      });
  };
};
