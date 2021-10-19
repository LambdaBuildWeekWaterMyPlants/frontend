import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { loginSchema as schema } from '../validation'

const initialValues = { username: '', password: '' }
const initialErrors = { username: '', password: '' }

// receives a callback function in props names submit
export default function LoginForm({ submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(false)

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

    const user = {
      username: values.username.trim(),
      password: values.password,
    }

    submit(user)
    setValues(() => initialValues)
  }

  // enables button when validation passes
  useEffect(() => {
    schema.isValid(values).then((valid) => setDisabled(() => !valid))
  }, [values])

  return (
    <form className='loginForm' onSubmit={handleSubmit}>
      <h2>Sign In</h2>

      <div className='form-group'>
        <label className='username'>
          Username
          <input type='text' name='username' value={values.username} onChange={handleChange} />
        </label>
        <span className='error'>{errors.username}</span>
      </div>

      <div className='form-group'>
        <label className='password'>
          Password
          <input type='password' name='password' value={values.password} onChange={handleChange} />
        </label>
        <span className='error'>{errors.password}</span>
      </div>

      <button disabled={disabled}>Login</button>
    </form>
  )
}
