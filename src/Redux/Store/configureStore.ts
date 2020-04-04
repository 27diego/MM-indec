import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "../../types/Actions";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AuthenticationReducer } from "../reducers/Authentication";
import { ErrorReducer } from "../reducers/Errors";
import { MenuItemReducer } from "../reducers/MenuItem";
import { GetUsersReducer } from "../reducers/Users";
import { GetDepartmentsReducer } from "../reducers/Departments";
import { DocumentReducer } from "../reducers/Document";
import { DisplayDocumentReducer } from "../reducers/DisplayDocument";

export const rootReducer = combineReducers({
  AuthenticationReducer,
  ErrorReducer,
  MenuItemReducer,
  GetUsersReducer,
  GetDepartmentsReducer,
  DocumentReducer,
  DisplayDocumentReducer,
});

const persistConfig = {
  blacklist: ["form"],
  key: "reactreduxform",
  storage,
};

const composeEnhanger =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export type AppState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(
  thunk as ThunkMiddleware<AppState, AppActions>
);
const store: any = createStore(persistedReducer, composeEnhanger(middleware));
const persistor = persistStore(store);
export { store, persistor };
