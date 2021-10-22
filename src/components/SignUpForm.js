import { useState, useEffect } from 'react'
import { StyledForm } from './StyledForm'
import { signUpSchema as schema } from '../validation'
import { validate } from '../utils/validate'

const initialValues = { username: '', phoneNumber: '', password: '' }
const initialErrors = { username: '', phoneNumber: '', password: '' }

export default function SignUpForm({ submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    schema.isValid(values).then((valid) => setDisabled(() => !valid))
  }, [values])

  const handleChange = (event) => {
    const { name, value } = event.target
    validate(name, value, schema, setErrors)
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    submit(values)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <div className='form-group'>
        <label>
          Username
          <input type='text' name='username' value={values.username} onChange={handleChange} />
        </label>
        <div className='error'>
          <span>{errors.username}</span>
        </div>
      </div>

      <div className='form-group'>
        <label>
          Phone
          <input
            type='phoneNumber'
            name='phoneNumber'
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
