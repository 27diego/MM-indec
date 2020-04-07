import { CategoryTypes } from "../../types/Actions";

const CategoriesReducerDefaultState: string[] = [];

export const CategoriesReducer = (
  state = CategoriesReducerDefaultState,
  action: CategoryTypes
) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return action.payload;
    case "ADD_CATEGORY":
      return [...state, action.payload];
    case "DELETE_CATEGORY":
      return state.filter((item) => item !== action.payload);
    case "SIGN_OUT":
      return CategoriesReducerDefaultState;
    default:
      return state;
  }
};
