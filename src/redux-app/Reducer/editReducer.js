const Mode = {
  data: {},
  Mode: ""
}

const editReducer = (state = Mode, action) => {
  switch (action.type) {
    case "EditMode":
      return ({
        ...state,
        Mode: action.type,
        data: action.data
      })
    case "userEdited":
      return ({
        ...state,
        Mode: "Edited",
        data: action.data
      })
    case "userEditedFailed":
      return ({
        ...state,
        data: action.data
      })
    case "cancel":
      return ({
        ...state,
        Mode: "cancel"
      })
    default:
      return state
  }
}

export default editReducer