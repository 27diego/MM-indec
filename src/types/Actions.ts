import { User } from "./User";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const ERROR = "ERROR";
export const GET_USERS = "GET_USERS";
export const SET_MENU_ITEM = "SET_MENU_ITEM";

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

export type UserAuthenticationTypes = SignInUserAction | SignOutUserAction;
export type UsersTypes = getUsersActions;
export type ErrorTypes = ErrorAction;
export type MenuItemTypes = MenuItemAction;

export type AppActions =
  | UserAuthenticationTypes
  | UsersTypes
  | ErrorTypes
  | MenuItemTypes;
