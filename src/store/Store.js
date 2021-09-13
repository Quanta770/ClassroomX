import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./RootReducer";

export default createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
