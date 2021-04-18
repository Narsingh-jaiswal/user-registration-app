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

export const ageValidation = (event,setValidation,Validation,setUser,user) => {
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