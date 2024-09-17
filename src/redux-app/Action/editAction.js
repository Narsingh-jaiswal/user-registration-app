import axios from "axios"
export const updateUser = (data) => (dispatch) => {
  axios.put(`http://localhost:8000/user/${data.id}`, data).then(
    (updateduser) => {
      dispatch({
        type: "userEdited",
        data: updateduser.data
      })
    },
    (rejectUpdate) => {
      dispatch({
        type: "userEditedFailed",
        data: rejectUpdate.message
      })
    }
  )
}

export const edit = (data) => ({
  type: "EditMode",
  data: data
})

export const cancelEdit = (data) => ({
  type: "cancel",
  data: data
})