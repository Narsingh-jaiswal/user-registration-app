import React, { useState } from 'react'
import { connect } from 'react-redux'
import registerUserAction from '../../redux-app/Action/registerUserAction'
import "./Form.css"
const Formcomponent = (props) => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    contact: '',
    email: '',

  })

  const [Validation, setValidation] = useState({
    contactValidation: '',
    ageValidation: ''
  })

  const FormSubmit = (event) => {
    event.preventDefault()
    props.userRegistrationDispatch(user)
    setUser({
      name: '',
      age: '',
      contact: '',
      email: '',
    })
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

          <button className="form-submit-button" type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

const mapstatetoprops = (state) => ({
  getstate: state
})

const mapdispatchtoprops = (dispatch) => ({
  userRegistrationDispatch: (userData) => {
    dispatch(registerUserAction(userData))
  }
})

export default connect(mapstatetoprops, mapdispatchtoprops)(Formcomponent)