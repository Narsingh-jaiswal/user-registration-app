import axios from "axios"
import { getRegisteredUser } from "../Constants";

const getUserAction = (SortBy) => (dispatch) => {
  axios.get("http://localhost:8000/user").then(
    (user) => {
      const users = user.data
      switch (SortBy) {
        case "name":
          dispatch({
            type: getRegisteredUser,
            userdata: users.sort((min, max) => min.name - max.name)
          })
          break;
        case "age":
          dispatch({
            type: getRegisteredUser,
            userdata: users.sort((min, max) => min.age - max.age)
          })
          break
        case "contact":
          dispatch({
            type: getRegisteredUser,
            userdata: users.sort((min, max) => min.contact - max.contact)
          })
          break
        case "email":
          dispatch({
            type: getRegisteredUser,
            userdata: users.sort((min, max) => min.email - max.email)
          })
          break
        default:
          dispatch({
            type: getRegisteredUser,
            userdata: users
          })
          break;
      }
    },
    (error) => {
    }
  )
}

export default getUserAction