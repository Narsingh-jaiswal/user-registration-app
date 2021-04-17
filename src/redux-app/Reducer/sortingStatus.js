const initialSortStatus = {
  previousSortBy: "",
  ascending: false,
  imgUrl: ""
}
const sortStatus = (state = initialSortStatus, action) => {
  switch (action.type) {
    case "changeAscendingValue":
      return ({
        previousSortBy: action.sortBy,
        ascending: action.ascendingValue,
        imgUrl: "https://www.flaticon.com/svg/vstatic/svg/545/545679.svg?token=exp=1618688758~hmac=9a1c689068de940144bbfd53d8101883"
      })
    default:
      return state;
  }
}
export default sortStatus