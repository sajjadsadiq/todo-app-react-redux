import { combineReducers } from "redux";
import filtersReducer from "./filters/reducer";
import todoReducer from "./todos/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filtersReducer,
});

export default rootReducer;
