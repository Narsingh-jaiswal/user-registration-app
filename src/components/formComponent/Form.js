import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { updateUser, cancelEdit } from '../../redux-app/Action/editAction'
import registerUser from '../../redux-app/Action/registerUserAction'
import SnakBar from '../snakBarComponent/SnakBar'
import "./Form.css"
import { ageValidation, contactValidation } from './validation'
const Formcomponent = (props) => {
  const initialUser = {
    name: '',
    age: '',
    contact: '',
    email: '',
  }
  const [user, setUser] = useState(initialUser)

  useEffect(() => {
    if (props.Mode.type === "EditMode")
      setUser(props.Mode.data)
    return () => {
      props.clear()
    }
  }, [])
  
  const [Validation, setValidation] = useState({
    contactValidation: '',
    ageValidation: ''
  })

  const FormSubmit = (event) => {
    event.preventDefault()
    if (user.contact.length === 10) {
      props.userRegistrationDispatch(user)
      setUser(initialUser)
    } else {
      setValidation({ ...Validation, contactValidation: "contact number should contain 10 digits" })
    }
  }

  const onCancel = () => {
    props.cancelEdit()
    setUser(initialUser)
  }

  const onUpdate = () => {
    if (user.contact.length === 10) {
      props.updateUser(user)
      setUser(initialUser)
    } else {
      setValidation({ ...Validation, contactValidation: "contact number should contain 10 digits" })
    }
  }

  return (
    <>
      <div className="form-container">
        <h1 className="form-heading">Add User</h1>
        <h4 className="form-subheading">To your contact</h4>
        <form className="main-form" onSubmit={FormSubmit}>
          <label className="form-label">Name</label>
          <input
            value={user.name}
            className="form-input"
            onChange={(event) => setUser({
              ...user, name: event.target.value.trimStart()
            })}
            placeholder="Your Name" required />

          <label className="form-label">age</label>
          <input
            value={user.age}
            className="form-input"
            onChange={(event) => ageValidation(event, setValidation, Validation, setUser, user)}
            placeholder="21" required />
          <label className="error">{Validation.ageValidation}</label>

          <label className="form-label">Contact</label>
          <input
            value={user.contact}
            className="form-input"
            onChange={(event) => contactValidation(event, setValidation, Validation, setUser, user)}
            placeholder="8349322226" required />
          <label className="error">{Validation.contactValidation}</label>

          <label className="form-label">email</label>
          <input
            value={user.email}
            className="form-input"
            type="email"
            onChange={(event) => setUser({
              ...user, email: event.target.value.trimStart()
            })}
            placeholder="example.gmail.com" required />
          {
            props.Mode.type !== "EditMode" &&
            <button className="form-submit-button" type="submit">Submit</button>
          }
          {
            props.Mode.type === "EditMode" &&
            <>
              <button
                type='button'
                className="form-submit-button"
                onClick={onUpdate}>
                Update
              </button>
              <button
                className="form-submit-button"
                onClick={onCancel}>
                Cancel
              </button>
            </>
          }
        </form>
        <SnakBar />
      </div>
    </>
  )
}

const mapstatetoprops = (state) => ({
  Mode: {
    type: state.editReducer.Mode,
    data: state.editReducer.data,
  }
})

const mapdispatchtoprops = (dispatch) => ({
  userRegistrationDispatch: (userData) => dispatch(registerUser(userData)),
  updateUser: (data) => dispatch(updateUser(data)),
  cancelEdit: () => dispatch(cancelEdit()),
  clear: () => dispatch({ type: "clean" })
})

export default connect(mapstatetoprops, mapdispatchtoprops)(Formcomponent)