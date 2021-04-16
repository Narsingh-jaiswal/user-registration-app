import { userRegisterFail, userRegisterSuccess } from "../Constants";

const initialState = {
  userData: {},
  Mode: ""
}
const registerUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case userRegisterSuccess:
      return ({
        ...state,
        userData: action.userData,
        Mode: "Created"
      })
    case userRegisterFail:
      return ({
        ...state,
        userData: action.userData,
        Mode: "Fail to Create"
      })
    default:
      return state
  }
}

export default registerUserReducer