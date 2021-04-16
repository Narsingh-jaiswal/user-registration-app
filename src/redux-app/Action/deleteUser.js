import axios from "axios"

const deleteAction = (userData) => (dispatch) => {
  axios.delete(`http://localhost:8000/user/${userData.id}`).then(
    (deletedUser) => {
      dispatch({
        type: "deleted",
        userData: deletedUser.data
      })
    },
    (failtodelete) => {
      dispatch({
        type: "deletionFail",
        userData: failtodelete.message
      })
    }
  )
}

export default deleteAction