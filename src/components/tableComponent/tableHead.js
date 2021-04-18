export const tableHead = (dispatchGetUser, getState) => {
  return (
    <tr>
      <th className="table-head">
        <button
          className="action-btn"
          onClick={() => dispatchGetUser("")}>
          #
      </button>
      </th>
      <th className="table-head">
        {
          (getState.sortStatus.previousSortBy === "name" && !getState.sortStatus.ascending) &&
          <img
            className="arrow-img"
            src="https://www.flaticon.com/svg/vstatic/svg/545/545678.svg?token=exp=1618688775~hmac=2cef2b3fbc1161f5752e66d5beb3d4f1"
            alt="ascending descending img url" />
        }
        <button
          className="action-btn"
          onClick={() => dispatchGetUser("name")}>
          Name
      </button>
        {
          (getState.sortStatus.previousSortBy === "name" && getState.sortStatus.ascending) &&
          < img className="arrow-img" src={getState.sortStatus.imgUrl} alt="ascending descending img url" />
        }
      </th>
      <th className="table-head">
        {
          (getState.sortStatus.previousSortBy === "age" && !getState.sortStatus.ascending) &&
          <img
            className="arrow-img"
            src="https://www.flaticon.com/svg/vstatic/svg/545/545678.svg?token=exp=1618688775~hmac=2cef2b3fbc1161f5752e66d5beb3d4f1"
            alt="ascending descending img url" />
        }
        <button
          className="action-btn"
          onClick={() => dispatchGetUser("age")}>
          age
      </button>
        {
          (getState.sortStatus.previousSortBy === "age" && getState.sortStatus.ascending) &&
          < img className="arrow-img" src={getState.sortStatus.imgUrl} alt="ascending descending img url" />
        }
      </th>
      <th className="table-head">
        {
          (getState.sortStatus.previousSortBy === "email" && !getState.sortStatus.ascending) &&
          <img
            className="arrow-img"
            src="https://www.flaticon.com/svg/vstatic/svg/545/545678.svg?token=exp=1618688775~hmac=2cef2b3fbc1161f5752e66d5beb3d4f1"
            alt="ascending descending img url" />
        }
        <button
          className="action-btn"
          onClick={() => dispatchGetUser("email")}>
          email
      </button>
        {
          (getState.sortStatus.previousSortBy === "email" && getState.sortStatus.ascending) &&
          < img className="arrow-img" src={getState.sortStatus.imgUrl} alt="ascending descending img url" />
        }
      </th>
      <th className="table-head">
        {
          (getState.sortStatus.previousSortBy === "contact" && !getState.sortStatus.ascending) &&
          <img
            className="arrow-img"
            src="https://www.flaticon.com/svg/vstatic/svg/545/545678.svg?token=exp=1618688775~hmac=2cef2b3fbc1161f5752e66d5beb3d4f1"
            alt="ascending descending img url" />
        }
        <button
          className="action-btn"
          onClick={() => dispatchGetUser("contact")}>
          contact
      </button>
        {
          (getState.sortStatus.previousSortBy === "contact" && getState.sortStatus.ascending) &&
          < img className="arrow-img" src={getState.sortStatus.imgUrl} alt="ascending descending img url" />
        }
      </th>
      <th className="table-head">
        <button
          className="action-btn">
          edit
      </button>
      </th>
      <th className="table-head">
        <button
          className="action-btn">
          delete
      </button>
      </th>
    </tr>
  )
}