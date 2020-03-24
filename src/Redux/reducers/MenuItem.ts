import { MenuItemTypes } from "../../types/Actions";

const MenuItemReducerDefaultState = "Document";

export const MenuItemReducer = (
  state = MenuItemReducerDefaultState,
  action: MenuItemTypes
): string => {
  switch (action.type) {
    case "SET_MENU_ITEM":
      return action.payload;
    default:
      return state;
  }
};
