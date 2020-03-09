import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "../../types/Actions";

import { AuthenticationReducer } from "../reducers/Authentication";
import { ErrorReducer } from "../reducers/Errors";
import { UsersReducer } from "../reducers/Users";

export const rootReducer = combineReducers({
  AuthenticationReducer,
  ErrorReducer,
  UsersReducer
});

const composeEnhanger =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeEnhanger(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
  )
);
