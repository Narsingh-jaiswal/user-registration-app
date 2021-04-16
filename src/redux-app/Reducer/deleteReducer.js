const deleteData = {
  data: {},
  Mode: ""
}

const deleteReducer = (state = deleteData, action) => {
  switch (action.type) {
    case "deleted":
      return ({
        ...state,
        data: action.userData,
        Mode: "Delete user"
      })
    case "deletionFail":
      return ({
        ...state,
        data: action.userData,
        Mode: "Deletion Fail"
      })
    default:
      return state
  }
}

export default deleteReducer