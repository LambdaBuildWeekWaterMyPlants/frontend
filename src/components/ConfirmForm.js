import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { confirmSchema as schema } from '../validation'
import { StyledForm } from './StyledForm'

const initialValues = { tel: '', password: '' }
const initialErrors = { tel: '', password: '' }

// receives a callback function in props named submit
export default function UpdateForm({ submit }) {
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
    <StyledForm onSubmit={handleSubmit}>
      <h2>Confirm Your Password</h2>

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
