import { DocumentTypes } from "../../types/Actions";
import { Document } from "../../types/Document";

const DocumentsReducerDefaultState: Document[] = [];
let originalArray: any = [];
let filteredArray: Document[] = [];

export const DocumentReducer = (
  state = DocumentsReducerDefaultState,
  action: DocumentTypes
) => {
  switch (action.type) {
    case "GET_DOCUMENTS":
      originalArray = action.payload;
      return action.payload;
    case "DELETE_DOCUMENT":
      return state.filter(doc => doc.title !== action.payload);
    case "FILTER_DOCUMENTS":
      filteredArray = originalArray;
      return filteredArray.filter(item => {
        let name = item.title.toLocaleLowerCase();
        let chemical = item.category.toLocaleLowerCase();
        return (
          name.indexOf(action.payload.toLocaleLowerCase()) !== -1 ||
          chemical.indexOf(action.payload.toLocaleLowerCase()) !== -1
        );
      });
    default:
      return state;
  }
};
