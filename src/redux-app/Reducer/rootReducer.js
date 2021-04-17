import { combineReducers } from "redux";
import registerUserReducer from "./registerUserReducer";
import getUserReducer from "./getUserReducer";
import editReducer from "./editReducer";
import deleteReducer from "./deleteReducer";
import appStatus from "./AppStatusReducer";
import sortStatus from "./sortingStatus";

const rootReducer = combineReducers({
  registerUserReducer,
  getUserReducer,
  editReducer,
  deleteReducer,
  appStatus,
  sortStatus
})

export default rootReducer