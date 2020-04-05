import { MenuItemTypes } from "../../types/Actions";

const MenuItemReducerDefaultState = "";

export const MenuItemReducer = (
  state = MenuItemReducerDefaultState,
  action: MenuItemTypes
): string => {
  switch (action.type) {
    case "SET_MENU_ITEM":
      return action.payload;
    case "SIGN_OUT":
      return MenuItemReducerDefaultState;
    default:
      return state;
  }
};
