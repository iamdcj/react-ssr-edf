import { createStore, applyMiddleware, Action, Store } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/_rootReducer";

import axios from "axios";

import { IS_BROWSER } from "../_constants";

let store: Store;

const API = axios.create({
  method: "GET"
});

export const CreateStore = (state = {}) => {
  store = createStore(rootReducer, state, configureMiddleware);
};

export const GetStore = () => store;

const configureMiddleware = IS_BROWSER
  ? composeWithDevTools(applyMiddleware(thunk.withExtraArgument(API)))
  : applyMiddleware(thunk.withExtraArgument(API));

export type RootState = ReturnType<typeof rootReducer>;
export type ThunkResult<Result> = ThunkAction<Result, RootState, void, Action>;
