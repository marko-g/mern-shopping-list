import { combineReducers } from "redux";
import itemReducers from "./itemReducer";

export default combineReducers({
  item: itemReducers
});
