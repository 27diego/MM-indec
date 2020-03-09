import { Users } from "../../types/Users";
import { GetUsersTypes } from "../../types/Actions";

const UsersReducerDefaultState: Users = {
  users: []
};

export const UsersReducer = (
  state = UsersReducerDefaultState,
  action: GetUsersTypes
): Users => {
  switch (action.type) {
    case "GET_USERS":
      return { users: action.payload };
    default:
      return state;
  }
};
