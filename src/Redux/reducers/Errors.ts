import { ErrorTypes } from "../../types/Actions";

const ErrorsReducerDefaultState: string = "";

export const ErrorReducer = (
  state = ErrorsReducerDefaultState,
  action: ErrorTypes
): string => {
  switch (action.type) {
    case "ERROR":
      return action.payload;
    case "SIGN_OUT":
      return ErrorsReducerDefaultState;
    default:
      return state;
  }
};
