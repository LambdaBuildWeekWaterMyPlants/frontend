import { useState, useEffect } from 'react'
import { StyledForm } from './StyledForm'
import { updateSchema as schema } from '../validation'
import { validate } from '../utils/validate'

const initialValues = { phoneNumber: '', password: '', newPassword: '', confirmNewPassword: '' }
const initialErrors = { phoneNumber: '', password: '', newPassword: '', confirmNewPassword: '' }

export default function UpdateForm({ user, submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(false)

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
      phoneNumber: values.phoneNumber ? values.phoneNumber : user.phoneNumber,
      password: values.password,
      newPassword: values.newPassword,
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
          <input
            type='tel'
            name='phoneNumber'
            placeholder='optional'
            value={values.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <div className='error'>
          <span>{errors.phoneNumber}</span>
        </div>
      </div>

      <div className='form-group'>
        <label>
          Current Password
          <input
            type='password'
            name='password'
            placeholder='required'
            value={values.password}
            onChange={handleChange}
          />
        </label>
        <div className='error'>
          <span>{errors.password}</span>
        </div>
      </div>

      <div className='form-group'>
        <label>
          New Password
          <input
            type='password'
            name='newPassword'
            placeholder='required'
            value={values.newPassword}
            onChange={handleChange}
          />
        </label>
        <div className='error'>
          <span>{errors.newPassword}</span>
        </div>
      </div>

      <div className='form-group'>
        <label>
          Confirm New Password
          <input
            type='password'
            name='confirmNewPassword'
            placeholder='required'
            value={values.confirmNewPassword}
            onChange={handleChange}
          />
        </label>
        <div className='error'>
          <span>{errors.confirmNewPassword}</span>
        </div>
      </div>

      <button disabled={disabled}>Submit</button>
    </StyledForm>
  )
}
