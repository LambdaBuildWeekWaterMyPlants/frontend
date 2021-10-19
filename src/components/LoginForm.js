import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { loginSchema as schema } from '../validation'

const initialValues = { username: '', password: '' }
const initialErrors = { username: '', password: '' }

export default function LoginForm({ submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(false)

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
