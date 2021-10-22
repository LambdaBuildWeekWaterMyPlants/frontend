import { useState, useEffect } from 'react'
import { StyledForm } from './StyledForm'
import { updateSchema as schema } from '../validation'
import { validate } from '../utils/validate'

const initialValues = { phoneNumber: '', password: '' }
const initialErrors = { phoneNumber: '', password: '' }

export default function UpdateForm({ user, submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (user) setValues((prev) => ({ ...prev, phoneNumber: user.phoneNumber }))
  }, [user])

  useEffect(() => {
    schema.isValid(values).then((valid) => setDisabled(() => !valid))
  }, [values])

  const handleChange = (event) => {
    const { name, value } = event.target
    validate(name, value, schema, setErrors)
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedUser = {
      username: user.username,
      phoneNumber: values.phoneNumber,
      password: values.password,
    }

    submit(updatedUser)
  }

  if (!user) return null

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>
        Update <span className='username'>{user.username}</span>
      </h2>

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
