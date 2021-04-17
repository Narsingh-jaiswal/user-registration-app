import axios from "axios"
import { getRegisteredUser } from "../Constants";

const getUserReducer = () => (dispatch) => {
  axios.get("http://localhost:8000/user").then(
    (user) => {
      const users = user.data
      dispatch({
        type: getRegisteredUser,
        userdata: users
      })
    },
    (error) => {
    }
  )
}

export default getUserReducer