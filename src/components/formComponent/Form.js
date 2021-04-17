import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { updateUser, cancelEdit } from '../../redux-app/Action/editAction'
import registerUser from '../../redux-app/Action/registerUserAction'
import SnakBar from '../snakBarComponent/SnakBar'
import "./Form.css"
const Formcomponent = (props) => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    contact: '',
    email: '',
  })

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
      setUser({
        name: '',
        age: '',
        contact: '',
        email: '',
      })
    } else {
      setValidation({ ...Validation, contactValidation: "contact number should contain 10 digits" })
    }
  }

  const contactValidation = (event) => {
    if (isNaN(event.target.value)) {
      setValidation({
        ...Validation,
        contactValidation: 'only numbers accepted'
      })
    } else if (user.contact.length >= 10) {
      setValidation({
        ...Validation,
        contactValidation: 'out of range'
      })
      setUser({
        ...user,
        contact: parseInt(user.contact / 10),
      })
    } else {
      setValidation({
        ...Validation,
        contactValidation: ''
      })
      setUser({
        ...user, contact: event.target.value.trimStart()
      })
    }
  }

  const ageValidation = (event) => {
    if (isNaN(event.target.value)) {
      setValidation({
        ...Validation,
        ageValidation: 'only numbers accepted'
      })
    } else {
      setValidation('')
      setUser({
        ...user, age: event.target.value.trimStart()
      })
    }
  }

  const onCancel = () => {
    props.cancelEdit()
    setUser({
      name: '',
      age: '',
      contact: '',
      email: '',
    })
  }

  const onUpdate = () => {
    props.updateUser(user)
    setUser({
      name: '',
      age: '',
      contact: '',
      email: '',
    })
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
            onChange={ageValidation}
            placeholder="21" required />
          <label className="error">{Validation.ageValidation}</label>

          <label className="form-label">Contact</label>
          <input
            value={user.contact}
            className="form-input"
            onChange={contactValidation}
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
  getstate: state,
  Mode: {
    type: state.editReducer.Mode,
    data: state.editReducer.data,
    status: state.editReducer.status
  }
})

const mapdispatchtoprops = (dispatch) => ({
  userRegistrationDispatch: (userData) => dispatch(registerUser(userData)),
  updateUser: (data) => dispatch(updateUser(data)),
  cancelEdit: () => dispatch(cancelEdit()),
  clear: () => dispatch({ type: "clean" })
})

export default connect(mapstatetoprops, mapdispatchtoprops)(Formcomponent)