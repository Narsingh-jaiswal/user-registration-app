import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import deleteAction from '../../redux-app/Action/deleteUser';
import { edit } from '../../redux-app/Action/editAction';
import getUserAction from '../../redux-app/Action/getUserAction';
import Snakbar from "./../snakBarComponent/SnakBar";
import "./Table.css"

const Tablecomponent = (props) => {
  useEffect(() => {
    props.dispatchGetUser("")
    return () => props.clear()
  }, [])
  const tabledata = props.getUser.map((element, index) => {
    return (
      <tr key={element.id}>
        <td>
          <p className="table-data">{index + 1}</p>
        </td>
        <td>
          <p className="table-data">{element.name}</p>
        </td>
        <td>
          <p className="table-data">{element.age}</p>
        </td>
        <td>
          <p className="table-data">{element.email}</p>
        </td>
        <td>
          <p className="table-data">{element.contact}</p>
        </td>
        <td>
          <Link to="/"
            onClick={() => props.dispatEditUser(element)}>
            <img
              onClick={() => props.dispatEditUser(element)}
              className="btn-img"
              src="https://www.flaticon.com/svg/vstatic/svg/84/84380.svg?token=exp=1618650598~hmac=1819b0fad75c534926c34f6dd3f1b4d3"
              alt="edit" />
          </Link>
        </td>
        <td>
          <img
            onClick={() => {
              props.dispatchDeleteUser(element)
              props.dispatchGetUser()
            }}
            className="btn-img"
            src="https://www.flaticon.com/svg/vstatic/svg/1345/1345874.svg?token=exp=1618650120~hmac=9a4c4cf8bff151a8427c59b6229c920b"
            alt="delete" />
        </td>
      </tr>
    )
  })
  return (
    <>
      <div className="table-container">
        <table className="main-table">
          <thead className="main-table-head">
            <tr>
              <th className="table-head">
                <button
                  className="action-btn"
                  onClick={() => props.dispatchGetUser("")}>
                  #
                </button>
              </th>
              <th className="table-head">
                {
                  (props.getState.sortStatus.previousSortBy === "name" && !props.getState.sortStatus.ascending) &&
                  <img
                    className="arrow-img"
                    src="https://www.flaticon.com/svg/vstatic/svg/545/545678.svg?token=exp=1618688775~hmac=2cef2b3fbc1161f5752e66d5beb3d4f1"
                    alt="ascending descending img url" />
                }
                <button
                  className="action-btn"
                  onClick={() => props.dispatchGetUser("name")}>
                  Name
                </button>
                {
                  (props.getState.sortStatus.previousSortBy === "name" && props.getState.sortStatus.ascending) &&
                  < img className="arrow-img" src={props.getState.sortStatus.imgUrl} alt="ascending descending img url" />
                }
              </th>
              <th className="table-head">
                {
                  (props.getState.sortStatus.previousSortBy === "age" && !props.getState.sortStatus.ascending) &&
                  <img
                    className="arrow-img"
                    src="https://www.flaticon.com/svg/vstatic/svg/545/545678.svg?token=exp=1618688775~hmac=2cef2b3fbc1161f5752e66d5beb3d4f1"
                    alt="ascending descending img url" />
                }
                <button
                  className="action-btn"
                  onClick={() => props.dispatchGetUser("age")}>
                  age
                </button>
                {
                  (props.getState.sortStatus.previousSortBy === "age" && props.getState.sortStatus.ascending) &&
                  < img className="arrow-img" src={props.getState.sortStatus.imgUrl} alt="ascending descending img url" />
                }
              </th>
              <th className="table-head">
                {
                  (props.getState.sortStatus.previousSortBy === "email" && !props.getState.sortStatus.ascending) &&
                  <img
                    className="arrow-img"
                    src="https://www.flaticon.com/svg/vstatic/svg/545/545678.svg?token=exp=1618688775~hmac=2cef2b3fbc1161f5752e66d5beb3d4f1"
                    alt="ascending descending img url" />
                }
                <button
                  className="action-btn"
                  onClick={() => props.dispatchGetUser("email")}>
                  email
                </button>
                {
                  (props.getState.sortStatus.previousSortBy === "email" && props.getState.sortStatus.ascending) &&
                  < img className="arrow-img" src={props.getState.sortStatus.imgUrl} alt="ascending descending img url" />
                }
              </th>
              <th className="table-head">
                {
                  (props.getState.sortStatus.previousSortBy === "contact" && !props.getState.sortStatus.ascending) &&
                  <img
                    className="arrow-img"
                    src="https://www.flaticon.com/svg/vstatic/svg/545/545678.svg?token=exp=1618688775~hmac=2cef2b3fbc1161f5752e66d5beb3d4f1"
                    alt="ascending descending img url" />
                }
                <button
                  className="action-btn"
                  onClick={() => props.dispatchGetUser("contact")}>
                  contact
                </button>
                {
                  (props.getState.sortStatus.previousSortBy === "contact" && props.getState.sortStatus.ascending) &&
                  < img className="arrow-img" src={props.getState.sortStatus.imgUrl} alt="ascending descending img url" />
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
          </thead>
          <tbody className="table-body">
            {tabledata}
          </tbody>
        </table>
        <Snakbar />
      </div>
    </>
  )
}

const mapstatetoprops = (state) => ({
  getUser: state.getUserReducer,
  getState: state
})

const mapdispatchtoprops = (dispatch) => ({
  dispatchGetUser: (sortBy) => dispatch(getUserAction(sortBy)),
  dispatEditUser: (userData) => dispatch(edit(userData)),
  dispatchDeleteUser: (userData) => dispatch(deleteAction(userData)),
  clear: () => dispatch({ type: "clean" })
})

export default connect(mapstatetoprops, mapdispatchtoprops)(Tablecomponent)