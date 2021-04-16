import axios from "axios"

const deleteAction = (userData) => (dispatch) => {
  axios.delete(`http://localhost:8000/user/${userData.id}`).then(
    (deletedUser) => {
      console.log("deleted");
    },
    (failtodelete) => {
      console.log("fail to delete");
    }
  )
}

export default deleteAction