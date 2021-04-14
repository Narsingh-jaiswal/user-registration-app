import React from 'react'
import "./Table.css"

const Tablecomponent = () => {
  const tabledata = []
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
export default Tablecomponent