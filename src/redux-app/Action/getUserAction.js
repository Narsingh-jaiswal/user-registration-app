import axios from "axios"
import { getRegisteredUser } from "../Constants";

const compareFunctionbyName = (first, second) => {
  if (first.name > second.name) {
    return -1
  } else if (first.name < second.name) {
    return 1
  } else {
    return 0
  }
}

const compareFunctionbyemail = (first, second) => {
  if (first.email > second.email) {
    return -1
  } else if (first.email < second.email) {
    return 1
  } else {
    return 0
  }
}

const DesccompareFunctionbyName = (first, second) => {
  if (first.name > second.name) {
    return 1
  } else if (first.name < second.name) {
    return -1
  } else {
    return 0
  }
}

const DesccompareFunctionbyemail = (first, second) => {
  if (first.email > second.email) {
    return 1
  } else if (first.email < second.email) {
    return -1
  } else {
    return 0
  }
}

const getUserAction = (SortBy) => (dispatch, getState) => {
  console.log(SortBy.valueOf());
  axios.get("http://localhost:8000/user").then(
    (user) => {
      const users = user.data
      const sortStatus = getState().sortStatus
      const Ascending = () => {
        switch (SortBy) {
          case "name":
            dispatch({
              type: getRegisteredUser,
              userdata: users.sort((first, second) => compareFunctionbyName(first, second))
            })
            break;
          case "age":
            dispatch({
              type: getRegisteredUser,
              userdata: users.sort((min, max) => min.age - max.age)
            })
            break
          case "contact":
            dispatch({
              type: getRegisteredUser,
              userdata: users.sort((min, max) => min.contact - max.contact)
            })
            break
          case "email":
            dispatch({
              type: getRegisteredUser,
              userdata: users.sort((first, second) => compareFunctionbyemail(first, second))
            })
            break
          default:
            dispatch({
              type: getRegisteredUser,
              userdata: users
            })
            break;
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
        console.log("else chala");
        if (sortStatus.ascending) {
          Ascending()
          dispatch({
            type: "changeAscendingValue",
            sortBy: SortBy,
            ascendingValue: !sortStatus.ascending
          })
        } else {
          switch (SortBy) {
            case "name":
              dispatch({
                type: getRegisteredUser,
                userdata: users.sort((first, second) => DesccompareFunctionbyName(first, second))
              })
              break;
            case "age":
              dispatch({
                type: getRegisteredUser,
                userdata: users.sort((min, max) => max.age - min.age)
              })
              break
            case "contact":
              dispatch({
                type: getRegisteredUser,
                userdata: users.sort((min, max) => max.contact - min.contact)
              })
              break
            case "email":
              dispatch({
                type: getRegisteredUser,
                userdata: users.sort((first, second) => DesccompareFunctionbyemail(first, second))
              })
              break
            default:
              dispatch({
                type: getRegisteredUser,
                userdata: users
              })
              break;
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