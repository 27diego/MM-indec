import { DocumentTypes } from "../../types/Actions";
import { Document } from "../../types/Document";

const DocumentsReducerDefaultState: Document[] = [];

export const DocumentReducer = (
  state = DocumentsReducerDefaultState,
  action: DocumentTypes
) => {
  switch (action.type) {
    case "GET_DOCUMENTS":
      return action.payload;
    default:
      return state;
  }
};
