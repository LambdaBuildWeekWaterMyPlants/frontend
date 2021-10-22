import { useState, useEffect } from 'react'
import { StyledForm } from './StyledForm'
import { validate } from '../utils/validate'
import { loginSchema as schema } from '../validation'

const initialValues = { username: '', password: '' }
const initialErrors = { username: '', password: '' }

export default function LoginForm({ submit }) {
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

    const userData = {
      username: values.username.trim(),
      password: values.password,
    }

    submit(userData)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Login</h2>

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
