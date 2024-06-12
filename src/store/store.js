import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { globalReducer } from "./reducers/globalReducer";
import { productReducer } from "./reducers/productReducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { myLogger } from "./middleware/myLogger";

const myReducer = combineReducers({
  global: globalReducer,
  product: productReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const myStore = legacy_createStore(
  myReducer,
  composeEnhancers(applyMiddleware(thunk, logger, myLogger))
);
