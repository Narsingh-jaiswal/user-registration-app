import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import registerUserReducer from "./Reducer/registerUserReducer";

const store = createStore(
  registerUserReducer,
  applyMiddleware(thunk)
)

export default store