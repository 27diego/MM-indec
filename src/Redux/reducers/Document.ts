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
        let name = item.title.toLocaleLowerCase().replace(/_/g, " ");
        let chemical = item.category.toLocaleLowerCase().replace(/_/g, " ");
        return (
          name.indexOf(action.payload.toLocaleLowerCase()) !== -1 ||
          chemical.indexOf(action.payload.toLocaleLowerCase()) !== -1
        );
      });
    case "FILTER_DOCUMENTS_DEPARTMENT":
      filteredArray = originalArray;
      return filteredArray.filter(item => {
        let department = item.department.toLocaleLowerCase();
        return department === action.payload.toLocaleLowerCase();
      });
    default:
      return state;
  }
};
