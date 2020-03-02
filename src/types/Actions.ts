import { User } from "./User";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const ERROR = "ERROR";

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

export type UserAuthenticationTypes = SignInUserAction | SignOutUserAction;
export type ErrorTypes = ErrorAction;

export type AppActions = UserAuthenticationTypes | ErrorTypes;
