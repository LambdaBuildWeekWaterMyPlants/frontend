import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { updateSchema as schema } from '../validation'
import { StyledForm } from './StyledForm'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialValues = { phoneNumber: '', password: '' }
const initialErrors = { phoneNumber: '', password: '' }

// receives a callback function in props named submit
export default function UpdateForm({ submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(false)
  const { push } = useHistory()

  const [user, setUser] = useState(null)

  // validates input using yup and schema
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors((prev) => ({ ...prev, [name]: '' }))
      })
      .catch((err) => {
        setErrors((prev) => ({ ...prev, [name]: err.errors[0] }))
      })
  }

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'))
    if (localUser) {
      console.log(localUser)

      setUser(() => localUser)
      setValues((prev) => ({ ...prev, phoneNumber: localUser.phoneNumber }))
    }
  }, [])

  // deconstructs event
  // validates input
  // updates values state
  const handleChange = (event) => {
    const { name, value } = event.target

    validate(name, value)

    setValues((prev) => ({ ...prev, [name]: value }))
  }

  // construct user object from form values
  // pass newUser to callback function in props
  // clears values state
  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedUser = {
      username: user.username,
      phoneNumber: values.phoneNumber,
      password: values.password,
    }

    axiosWithAuth()
      .put(`https://water-myplants-backend.herokuapp.com/api/users/${user.user_id}/`, updatedUser)
      .then((resp) => {
        // localStorage.setItem('token', resp.data.token)

        // localStorage.setItem('user', JSON.stringify(resp.data.user))

        // console.log(resp.data)
        // push('/plants-list')
        console.log(resp)
      })
      .catch((err) => console.log(err))

    submit(updatedUser)
    setValues(() => initialValues)
  }

  // enables button when validation passes
  useEffect(() => {
    schema.isValid(values).then((valid) => setDisabled(() => !valid))
  }, [values])

  if (!user) return null

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Update {user.username}</h2>

      <div className='form-group'>
        <label>
          Phone
          <input type='tel' name='phoneNumber' value={values.phoneNumber} onChange={handleChange} />
        </label>
        <div className='error'>
          <span>{errors.phoneNumber}</span>
        </div>
      </div>

      <div className='form-group'>
        <label>
          Password
          <input type='password' name='password' value={values.password} onChange={handleChange} />
        </label>
        <div className='error'>
          <span>{errors.password}</span>
        </div>
      </div>

      <button disabled={disabled}>Submit</button>
    </StyledForm>
  )
}
