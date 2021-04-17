import { deleted, deletionFail } from "../Constants"

const deleteData = {
  data: {}
}

const deleteReducer = (state = deleteData, action) => {
  switch (action.type) {
    case deleted:
      return ({
        ...state,
        data: action.userData
      })
    case deletionFail:
      return ({
        ...state,
        data: action.userData,
      })    
    default:
      return state
  }
}

export default deleteReducer