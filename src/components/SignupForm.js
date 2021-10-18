import { useState } from 'react'
import * as yup from 'yup'
import { schema } from '../validation/signupSchema'

const initialValues = { username: '', tel: '', password: '' }
const initialErrors = { username: '', tel: '', password: '' }

export default function SignUp() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(false)

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

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('submitted')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input type='text' value={values.username} onChange={handleChange} />
      </label>

      <label>
        Phone Number
        <input type='tel' value={values.tel} onChange={handleChange} />
      </label>

      <label>
        Password
        <input type='password' value={values.password} onChange={handleChange} />
      </label>

      <button disabled={disabled}>Signup</button>
    </form>
  )
}
