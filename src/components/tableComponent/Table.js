import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import deleteAction from '../../redux-app/Action/deleteUser';
import { edit } from '../../redux-app/Action/editAction';
import getUserAction from '../../redux-app/Action/getUserAction';
import Snakbar from "./../snakBarComponent/SnakBar";
import { TableBody } from './tableBody';
import { tableHead } from './tableHead';
import "./Table.css"

const Tablecomponent = (props) => {
  useEffect(() => {
    props.dispatchGetUser("")
    return () => props.clear()
  }, [])

  const tabledata = TableBody(props.getUser, props.dispatEditUser, props.dispatchDeleteUser, props.dispatchGetUser)
  const tableHeadData = tableHead(props.dispatchGetUser, props.getState)
  return (
    <>
      <div className="table-container">
        <table className="main-table">
          <thead className="main-table-head">
            {tableHeadData}
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