import { combineReducers } from "redux";
import registerUserReducer from "./registerUserReducer";
import getUserReducer from "./getUserReducer";
import editReducer from "./editReducer";

const rootReducer = combineReducers({
  registerUserReducer,
  getUserReducer,
  editReducer
})

export default rootReducer