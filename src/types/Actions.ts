import { User } from "./User";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const ERROR = "ERROR";
export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";
export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const FILTER_USERS = "FILTER_USERS";
export const SET_MENU_ITEM = "SET_MENU_ITEM";
export const GET_DEPARTMENTS = "GET_DEPARTMENTS";
export const REMOVE_DEPARTMENT = "REMOVE_DEPARTMENT";
export const ADD_DEPARTMENT = "ADD_DEPARTMENT";
export const GET_DOCUMENT = "GET_DOCUMENT";
export const GET_DOCUMENTS = "GET_DOCUMENTS";
export const DELETE_DOCUMENT = "DELETE_DOCUMENT";
export const FILTER_DOCUMENTS = "FILTER_DOCUMENTS";
export const FILTER_DOCUMENTS_DEPARTMENT = "FILTER_DOCUMENTS_DEPARTMENT";
export const SET_DOCUMENT = "SET_DOCUMENT";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";

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

export interface RemoveErrorAction {
  type: typeof SIGN_OUT;
  payload: string;
}

export interface MenuItemAction {
  type: typeof SET_MENU_ITEM;
  payload: string;
}

export interface RemoveMenuItemAction {
  type: typeof SIGN_OUT;
  payload: string;
}

export interface getUsersActions {
  type: typeof GET_USERS;
  payload: User[];
}

export interface removeUsersActions {
  type: typeof SIGN_OUT;
  payload: User[];
}

export interface addUserAction {
  type: typeof ADD_USER;
  payload: User;
}

export interface editUserAction {
  type: typeof EDIT_USER;
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

export interface removeDepartmentsAction {
  type: typeof SIGN_OUT;
  payload: string[];
}

export interface getDocumentsAction {
  type: typeof GET_DOCUMENTS;
  payload: Document[];
}

export interface removeDocumentsAction {
  type: typeof SIGN_OUT;
  payload: Document[];
}

export interface deleteDocumentAction {
  type: typeof DELETE_DOCUMENT;
  payload: string;
}

export interface filterDocumentsAction {
  type: typeof FILTER_DOCUMENTS;
  payload: string;
}

export interface filterDocumentsByDepartment {
  type: typeof FILTER_DOCUMENTS_DEPARTMENT;
  payload: string;
}

export interface setDocumentAction {
  type: typeof SET_DOCUMENT;
  payload: string;
}

export interface removeDocumentAction {
  type: typeof SIGN_OUT;
  payload: string;
}

export interface getCategoriesAction {
  type: typeof GET_CATEGORIES;
  payload: string[];
}

export interface addCategoryAction {
  type: typeof ADD_CATEGORY;
  payload: string;
}

export interface deleteCategoryAction {
  type: typeof DELETE_CATEGORY;
  payload: string;
}

export interface removeCategoriesAction {
  type: typeof SIGN_OUT;
  payload: string[];
}

export type CategoryTypes =
  | getCategoriesAction
  | addCategoryAction
  | deleteCategoryAction
  | removeCategoriesAction;
export type UserAuthenticationTypes = SignInUserAction | SignOutUserAction;
export type DocumentTypes =
  | getDocumentsAction
  | deleteDocumentAction
  | filterDocumentsAction
  | filterDocumentsByDepartment
  | removeDocumentsAction;
export type UsersTypes =
  | getUsersActions
  | addUserAction
  | editUserAction
  | deleteUserAction
  | filterUsersAction
  | removeUsersActions;
export type ErrorTypes = ErrorAction | RemoveErrorAction;
export type MenuItemTypes = MenuItemAction | RemoveMenuItemAction;
export type DepartmentTypes =
  | getDepartmentsAction
  | removeDepartmentAction
  | addDepartmentAction
  | removeDepartmentsAction;
export type DisplayDocumentType = setDocumentAction | removeDocumentAction;

export type AppActions =
  | UserAuthenticationTypes
  | UsersTypes
  | ErrorTypes
  | MenuItemTypes
  | DepartmentTypes
  | DocumentTypes
  | DisplayDocumentType
  | CategoryTypes;
