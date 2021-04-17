import axios from "axios"
import { cancel, EditMode, setAppStatus, userEdited, userEditedFailed } from "../Constants"
export const updateUser = (data) => (dispatch) => {
  axios.put(`http://localhost:8000/user/${data.id}`, data).then(
    (updateduser) => {
      dispatch({
        type: userEdited,
        data: updateduser.data        
      })
      dispatch({
        type: setAppStatus,
        status: `${updateduser.data.name} edited successfully`
      })
    },
    (rejectUpdate) => {
      dispatch({
        type: userEditedFailed,
        data: rejectUpdate.message
      })
    }
  )
}

export const edit = (data) => ({
  type: EditMode,
  data: data
})

export const cancelEdit = () => ({
  type: cancel
})