import { combineReducers } from "redux";
import tasksReducer from "./reducers/taskReducer";

const reducer = combineReducers({
  tasks: tasksReducer,
});

export default reducer;
