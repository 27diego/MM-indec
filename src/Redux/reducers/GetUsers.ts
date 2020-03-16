import { UsersTypes } from "../../types/Actions";
import { User } from "../../types/User";

const GetUsersReducerDefaultState: User[] = [];

export const GetUsersReducer = (
  state = GetUsersReducerDefaultState,
  action: UsersTypes
): User[] => {
  switch (action.type) {
    case "GET_USERS":
      return action.payload;
    default:
      return state;
  }
};
