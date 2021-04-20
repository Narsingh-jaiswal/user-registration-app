import axios from "axios"
import { setAppStatus, userRegisterFail, userRegisterSuccess } from "../Constants";

const registerUser = (userData) => (dispatch) => {
  axios.post("http://localhost:8000/user", userData).then(
    (registerSuccessfully) => {
      dispatch({
        type: userRegisterSuccess,
        userData: registerSuccessfully.data,
      })
      dispatch({
        type: setAppStatus,
        status: `${registerSuccessfully.data.name} Added Successfully`
      })
    },
    (registerUserFail) => {
      dispatch({
        type: userRegisterFail,
        userData: registerUserFail.message
      })
    }
  )
}

export default registerUser