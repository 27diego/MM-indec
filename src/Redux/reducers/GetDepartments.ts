import { DepartmentTypes } from "../../types/Actions";

const GetDepartmentsReducerInitialState: string[] = [];

export const GetDepartmentsReducer = (
  state = GetDepartmentsReducerInitialState,
  action: DepartmentTypes
): string[] => {
  switch (action.type) {
    case "GET_DEPARTMENTS":
      return action.payload;
    default:
      return state;
  }
};
