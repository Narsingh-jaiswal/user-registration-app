export const contactValidation = (event, setValidation, Validation, setUser, user) => {
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

export const ageValidation = (event, setValidation, Validation, setUser, user) => {
  if (isNaN(event.target.value)) {
    setValidation({
      ...Validation,
      ageValidation: 'only numbers accepted'
    })
  } else {
    setValidation({
      ...Validation,
      ageValidation: ''
    })
    setUser({
      ...user, age: event.target.value.trimStart()
    })
  }
}

export const checkEmpty = (user, setValidation) => {
  let error = {}
  if (!user.email) {
    error.emailValidation = "Field-is-required"
  }
  if (!user.contact) {
    error.contactValidation = "Field-is-required"
  }
  if (!user.age) {
    error.ageValidation = "Field-is-required"
  }
  if (!user.name) {
    error.nameValidation = "Field-is-required"
  }
  setValidation(error)
}