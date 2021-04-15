import { combineReducers } from "redux";
import registerUserReducer from "./registerUserReducer";
import getUserReducer from "./getUserReducer";

const rootReducer = combineReducers({
  registerUserReducer,
  getUserReducer
})

export default rootReducer