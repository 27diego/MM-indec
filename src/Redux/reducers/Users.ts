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
    case "FILTER_USERS":
      if (action.payload === "") return originalArray;
      else {
        filteredUsers = state.filter(item =>
          item.first_name.includes(action.payload)
        );
        return filteredUsers;
      }
    case "DELETE_USER":
      originalArray = originalArray.filter(
        item => item.username !== action.payload
      );
      return state.filter(item => item.username !== action.payload);
    default:
      return state;
  }
};
