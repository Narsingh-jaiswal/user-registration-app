import { getRegisteredUser } from "../Constants";

const initialUser = []
const getUserReducer = (state = initialUser, action) => {
  switch (action.type) {
    case getRegisteredUser:
      return ([
        ...action.userdata
      ])

    default:
      return state
  }
}
export default getUserReducer