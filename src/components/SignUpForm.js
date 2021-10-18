import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { schema } from '../validation/signupSchema'

const initialValues = { username: '', tel: '', password: '' }
const initialErrors = { username: '', tel: '', password: '' }

// receives a callback function in props names submit
export default function SignUpForm({ submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(false)

  // validtes input using yup and schema
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

  // construct newUser object from form values
  // pass newUser to callback function in props
  const handleSubmit = (event) => {
    event.preventDefault()

    const newUser = {
      username: values.username.trim(),
      tel: values.tel,
      password: values.password,
    }

    submit(newUser)
  }

  // enables button when validation passes
  useEffect(() => {
    schema.isValid(values).then((valid) => setDisabled(() => !valid))
  })

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <div>
        <label>
          Username
          <input type='text' name='username' value={values.username} onChange={handleChange} />
        </label>
        <span>{errors.username}</span>
      </div>

      <div>
        <label>
          Phone Number
          <input type='tel' name='tel' value={values.tel} onChange={handleChange} />
        </label>
        <span>{errors.tel}</span>
      </div>

      <div>
        <label>
          Password
          <input type='password' name='password' value={values.password} onChange={handleChange} />
        </label>
        <span>{errors.password}</span>
      </div>

      <button disabled={disabled}>Signup</button>
    </form>
  )
}
