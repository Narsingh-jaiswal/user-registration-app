import { clean, setAppStatus } from "../Constants"

const appStatus = (state = "", action) => {
  switch (action.type) {
    case setAppStatus:
      return state = action.status
    case clean:
      return state = ""
    default:
      return state
  }
}
export default appStatus