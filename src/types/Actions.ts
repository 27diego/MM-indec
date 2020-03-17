import { User } from "./User";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const ERROR = "ERROR";
export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";
export const ADD_USER = "ADD_USER";
export const FILTER_USERS = "FILTER_USERS";
export const SET_MENU_ITEM = "SET_MENU_ITEM";
export const GET_DEPARTMENTS = "GET_DEPARTMENTS";
export const REMOVE_DEPARTMENT = "REMOVE_DEPARTMENT";
export const ADD_DEPARTMENT = "ADD_DEPARTMENT";

export interface SignInUserAction {
  type: typeof SIGN_IN;
  payload: User;
}

export interface SignOutUserAction {
  type: typeof SIGN_OUT;
  payload: User;
}

export interface ErrorAction {
  type: typeof ERROR;
  payload: string;
}

export interface MenuItemAction {
  type: typeof SET_MENU_ITEM;
  payload: string;
}

export interface getUsersActions {
  type: typeof GET_USERS;
  payload: User[];
}

export interface addUserAction {
  type: typeof ADD_USER;
  payload: User;
}

export interface deleteUserAction {
  type: typeof DELETE_USER;
  payload: string;
}

export interface filterUsersAction {
  type: typeof FILTER_USERS;
  payload: string;
}

export interface getDepartmentsAction {
  type: typeof GET_DEPARTMENTS;
  payload: string[];
}

export interface removeDepartmentAction {
  type: typeof REMOVE_DEPARTMENT;
  payload: string;
}

export interface addDepartmentAction {
  type: typeof ADD_DEPARTMENT;
  payload: string;
}

export type UserAuthenticationTypes = SignInUserAction | SignOutUserAction;
export type UsersTypes =
  | getUsersActions
  | addUserAction
  | deleteUserAction
  | filterUsersAction;
export type ErrorTypes = ErrorAction;
export type MenuItemTypes = MenuItemAction;
export type DepartmentTypes =
  | getDepartmentsAction
  | removeDepartmentAction
  | addDepartmentAction;

export type AppActions =
  | UserAuthenticationTypes
  | UsersTypes
  | ErrorTypes
  | MenuItemTypes
  | DepartmentTypes;
