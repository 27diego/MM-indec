import { UsersTypes } from "../../types/Actions";
import { User } from "../../types/User";

const GetUsersReducerDefaultState: User[] = [];
let filteredUsers: User[] = [];
let originalArray: User[] = [];

export const GetUsersReducer = (
  state = GetUsersReducerDefaultState,
  action: UsersTypes
): User[] => {
  switch (action.type) {
    case "GET_USERS":
      originalArray = action.payload;
      return originalArray;
    case "ADD_USER":
      originalArray = [...originalArray, action.payload];
      return [...state, action.payload];
    case "EDIT_USER":
      state = state
        .filter((user) => user.username !== action.payload.username)
        .concat(action.payload);
      return state;
    case "FILTER_USERS":
      filteredUsers = originalArray;
      return filteredUsers.filter((item) => {
        let name =
          item.first_name.toLocaleLowerCase() +
          item.last_name.toLocaleLowerCase();
        return name.indexOf(action.payload.toLocaleLowerCase()) !== -1;
      });
    case "DELETE_USER":
      originalArray = originalArray.filter(
        (item) => item.username !== action.payload
      );
      return state.filter((item) => item.username !== action.payload);
    case "SIGN_OUT":
      return GetUsersReducerDefaultState;
    default:
      return state;
  }
};
