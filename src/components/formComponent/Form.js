import React, { useState } from 'react'
import "./Form.css"
const Formcomponent = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    contact: '',
    email: '',

  })
  return (
    <>
      <div className="form-container">
        <h1 className="form-heading">Add User</h1>
        <h4 className="form-subheading">To your contact</h4>
        <form className="main-form">
          <label className="form-label">Name</label>
          <input
            value={user.name}
            className="form-input"
            onChange={(e) => setUser({
              ...user, name: e.target.value
            })}
            placeholder="Your Name" />

          <label className="form-label">age</label>
          <input
            value={user.age}
            className="form-input"
            onChange={(e) => setUser({
              ...user, age: e.target.value
            })}
            placeholder="21" />

          <label className="form-label">Contact</label>
          <input
            value={user.contact}
            className="form-input"
            onChange={(e) => setUser({
              ...user, contact: e.target.value
            })}
            placeholder="8349322226" />

          <label className="form-label">email</label>
          <input
            value={user.email}
            className="form-input"
            type="email"
            onChange={(e) => setUser({
              ...user, email: e.target.value
            })}
            placeholder="example.gmail.com" />

          <button className="form-submit-button" type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Formcomponent