import { useState, useEffect } from 'react'
import { StyledForm } from './StyledForm'
import { signUpSchema as schema } from '../validation'
import { validate } from '../utils/validate'

const initialValues = { username: '', phoneNumber: '', password: '', confirmPassword: '' }
const initialErrors = { username: '', phoneNumber: '', password: '', confirmPassword: '' }

export default function SignUpForm({ submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(false)

  // workaround since yup doesn't have a good way of confirming passwords
  const [passwordsMatch, setPasswordsMatch] = useState(false)

  useEffect(() => {
    if (values.password === values.confirmPassword) {
      setPasswordsMatch(() => true)
    } else {
      setPasswordsMatch(() => false)
    }
  }, [values])

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

    const parsedValues = {
      username: values.username,
      phoneNumber: values.phoneNumber,
      password: values.password,
    }

    submit(parsedValues)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <div className='form-group'>
        <label>
          Username
          <input
            type='text'
            name='username'
            placeholder='required'
            value={values.username}
            onChange={handleChange}
          />
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
            placeholder='required'
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
          Confirm Password
          <input
            type='password'
            name='confirmPassword'
            placeholder='required'
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <div className='error'>
          {!passwordsMatch ? (
            <span>
              Passwords must match
              <br />
            </span>
          ) : null}
          <span>{errors.confirmPassword}</span>
        </div>
      </div>

      <button disabled={disabled}>Submit</button>
    </StyledForm>
  )
}
