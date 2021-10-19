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

  const handleSubmit = (event) => {}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>

      <div>
        <label>
          Username
          <input type='text' />
        </label>
      </div>

      <div>
        <label>
          Password
          <input type='password' />
        </label>
      </div>

      <button>Login</button>
    </form>
  )
}
