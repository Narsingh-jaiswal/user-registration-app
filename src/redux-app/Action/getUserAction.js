import axios from "axios"
import { getRegisteredUser } from "../Constants";

const ascendingCompareFunction = (first, second) => {
  if (first > second) {
    return -1
  } else if (first < second) {
    return 1
  } else {
    return 0
  }
}

const descendingCompareFunction = (first, second) => {
  if (first > second) {
    return 1
  } else if (first < second) {
    return -1
  } else {
    return 0
  }
}

const getUserAction = (SortBy) => (dispatch, getState) => {
  axios.get("http://localhost:8000/user").then(
    (user) => {
      const users = user.data
      const sortStatus = getState().sortStatus
      const Ascending = () => {
        if (SortBy === "name" || SortBy === "email") {
          dispatch({
            type: getRegisteredUser,
            userdata: users.sort((first, second) => ascendingCompareFunction(first[SortBy], second[SortBy]))
          })
        } else if (SortBy === "age" || SortBy === "contact") {
          dispatch({
            type: getRegisteredUser,
            userdata: users.sort((min, max) => min[SortBy] - max[SortBy])
          })
        } else {
          dispatch({
            type: getRegisteredUser,
            userdata: users
          })
        }
      }
      if (sortStatus.previousSortBy !== SortBy) {
        Ascending()
        dispatch({
          type: "changeAscendingValue",
          sortBy: SortBy,
          ascendingValue: false
        })
      } else {
        if (sortStatus.ascending) {
          Ascending()
          dispatch({
            type: "changeAscendingValue",
            sortBy: SortBy,
            ascendingValue: !sortStatus.ascending
          })
        } else {
          if (SortBy === "name" || SortBy === "email") {
            dispatch({
              type: getRegisteredUser,
              userdata: users.sort((first, second) => descendingCompareFunction(first[SortBy], second[SortBy]))
            })
          } else if (SortBy === "age" || SortBy === "contact") {
            dispatch({
              type: getRegisteredUser,
              userdata: users.sort((min, max) => max[SortBy] - min[SortBy])
            })
          } else {
            dispatch({
              type: getRegisteredUser,
              userdata: users
            })
          }
        }
        dispatch({
          type: "changeAscendingValue",
          sortBy: SortBy,
          ascendingValue: !sortStatus.ascending
        })
      }
    },
    (error) => {
      alert(error.message)
    }
  )
}

export default getUserAction