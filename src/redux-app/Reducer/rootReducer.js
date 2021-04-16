import { combineReducers } from "redux";
import registerUserReducer from "./registerUserReducer";
import getUserReducer from "./getUserReducer";
import editReducer from "./editReducer";
import deleteReducer from "./deleteReducer";

const rootReducer = combineReducers({
  registerUserReducer,
  getUserReducer,
  editReducer,
  deleteReducer
})

export default rootReducer