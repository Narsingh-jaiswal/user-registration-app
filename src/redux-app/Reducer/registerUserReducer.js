import { userRegisterFail, userRegisterSuccess } from "../Constants";

const initialState = {
  userData: ''
}
const registerUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case userRegisterSuccess:
      return ({
        ...state,
        userData: action.userData
      })
    case userRegisterFail:
      return ({
        ...state,
        userData: action.userData
      })
    default:
      return state
  }
}

export default registerUserReducer