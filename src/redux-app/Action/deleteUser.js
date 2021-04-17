import axios from "axios"
import { deleted, deletionFail, setAppStatus } from "../Constants"

const deleteAction = (userData) => (dispatch) => {
  axios.delete(`http://localhost:8000/user/${userData.id}`).then(
    (deletedUser) => {
      dispatch({
        type: deleted,
        userData: deletedUser.data,
      })
      dispatch({
        type: setAppStatus,
        status: `${userData.name} deleted Successfully`
      })
    },
    (failtodelete) => {
      dispatch({
        type: deletionFail,
        userData: failtodelete.message
      })
    }
  )
}

export default deleteAction