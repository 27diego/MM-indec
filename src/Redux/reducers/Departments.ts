import { DepartmentTypes } from "../../types/Actions";

const GetDepartmentsReducerInitialState: string[] = [];

export const GetDepartmentsReducer = (
  state = GetDepartmentsReducerInitialState,
  action: DepartmentTypes
): string[] => {
  switch (action.type) {
    case "GET_DEPARTMENTS":
      return action.payload;
    case "REMOVE_DEPARTMENT":
      return state.filter(item => item !== action.payload);
    case "ADD_DEPARTMENT":
      return [...state, action.payload];
    default:
      return state;
  }
};
