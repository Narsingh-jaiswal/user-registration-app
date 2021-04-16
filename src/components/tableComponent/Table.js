import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { edit } from '../../redux-app/Action/editAction';
import getUserReducer from '../../redux-app/Action/getUserAction';
import "./Table.css"

const Tablecomponent = (props) => {
  useEffect(() => {
    props.dispatchGetUser()
  }, [])

  const tabledata = props.getUser.map((element, index) => {
    return (
      <tr key={element.id}>
        <td>
          <p>{index + 1}</p>
        </td>
        <td>
          <p>{element.name}</p>
        </td>
        <td>
          <p>{element.age}</p>
        </td>
        <td>
          <p>{element.email}</p>
        </td>
        <td>
          <p>{element.contact}</p>
        </td>
        <td>
          <Link to="/" className="table-action-button" onClick={() => props.dispatEditUser(element)}>edit</Link>
        </td>
        <td>
          <button className="table-action-button">delete</button>
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
                #
              </th>
              <th className="table-head">
                Name
              </th>
              <th className="table-head">
                age
              </th>
              <th className="table-head">
                email
              </th>
              <th className="table-head">
                contact
              </th>
              <th className="table-head">
                edit
              </th>
              <th className="table-head">
                delete
              </th>
            </tr>
          </thead>
          <tbody className="table-body">
            {tabledata}
          </tbody>
        </table>
      </div>
    </>
  )
}

const mapstatetoprops = (state) => ({
  getUser: state.getUserReducer
})

const mapdispatchtoprops = (dispatch) => ({
  dispatchGetUser: () => dispatch(getUserReducer()),
  dispatEditUser: (data) => dispatch(edit(data))
})

export default connect(mapstatetoprops, mapdispatchtoprops)(Tablecomponent)