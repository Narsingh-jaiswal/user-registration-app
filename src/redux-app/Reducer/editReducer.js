const Mode = {
  data: {},
  Mode: "create"
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
        data: action.data
      })
    case "userEditedFailed":
      return ({
        ...state,
        data: action.data
      })
    default:
      return state
  }
}

export default editReducer