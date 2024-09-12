import { Link } from "react-router-dom"

export const TableBody = (getUser, dispatEditUser, dispatchDeleteUser, dispatchGetUser) => getUser.map((element, index) => {
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
          onClick={() => dispatEditUser(element)}>
          <img
            onClick={() => dispatEditUser(element)}
            className="btn-img"
            src="https://www.flaticon.com/svg/vstatic/svg/84/84380.svg?token=exp=1618650598~hmac=1819b0fad75c534926c34f6dd3f1b4d3"
            alt="edit" />
        </Link>
      </td>
      <td>
        <img
          onClick={() => {
            dispatchDeleteUser(element)
            dispatchGetUser()
          }}
          className="btn-img"
          src="https://www.flaticon.com/svg/vstatic/svg/1345/1345874.svg?token=exp=1618650120~hmac=9a4c4cf8bff151a8427c59b6229c920b"
          alt="delete" />
      </td>
    </tr>
  )
})
