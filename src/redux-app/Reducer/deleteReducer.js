const deleteData = {
  data: {},
  Status: {}
}

const deleteReducer = (state = deleteData, action) => {
  switch (action.type) {
    case "deleted":
      return ({
        ...state,
        data: action.userData,
        Status: "Delete user"
      })
    case "deletionFail":
      return ({
        ...state,
        data: action.userData,
        status: "Deletion Fail"
      })
    default:
      return state
  }
}

export default deleteReducer