import { User } from "../../types/User";
import { UserAuthenticationTypes } from "../../types/Actions";

const AuthenticationReducerDefaultState: User = {
  first_name: "",
  last_name: "",
  username: "",
  admin: false
};

export const AuthenticationReducer = (
  state = AuthenticationReducerDefaultState,
  action: UserAuthenticationTypes
): User => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, ...action.payload };
    case "SIGN_OUT":
      return AuthenticationReducerDefaultState;
    default:
      return state;
  }
};
