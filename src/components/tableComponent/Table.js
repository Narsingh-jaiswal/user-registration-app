import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import getUserReducer from '../../redux-app/Action/getUserAction';
import "./Table.css"

const Tablecomponent = (props) => {
  const [tableData, setTableData] = useState()

  useEffect(() => {
    setTableData(props.dispatchGetUser())
  }, [tableData])

  const tabledata = props.getUser
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
  getUser: state.getUserReducer.map((element, index) => {
    return (
      <tr key={element.id}>
        <td>
          {index + 1}
        </td>
        <td>
          {element.name}
        </td>
        <td>
          {element.age}
        </td>
        <td>
          {element.email}
        </td>
        <td>
          {element.contact}
        </td>
        <td>
          edit
      </td>
        <td>
          delete
      </td>
      </tr>
    )
  })
})

const mapdispatchtoprops = (dispatch) => ({
  dispatchGetUser: () => dispatch(getUserReducer())
})

export default connect(mapstatetoprops, mapdispatchtoprops)(Tablecomponent)