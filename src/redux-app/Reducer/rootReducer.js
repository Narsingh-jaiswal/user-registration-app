import { combineReducers } from "redux";
import registerUserReducer from "./registerUserReducer";
import getUserReducer from "./getUserReducer";
import editReducer from "./editReducer";
import deleteReducer from "./deleteReducer";
import appStatus from "./AppStatusReducer";

const rootReducer = combineReducers({
  registerUserReducer,
  getUserReducer,
  editReducer,
  deleteReducer,
  appStatus
})

export default rootReducer