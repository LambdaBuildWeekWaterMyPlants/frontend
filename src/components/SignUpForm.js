import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { signUpSchema as schema } from '../validation'
import { StyledForm } from './StyledForm'
import axios from 'axios'
import { useHistory } from 'react-router'

const initialValues = { username: '', tel: '', password: '' }
const initialErrors = { username: '', tel: '', password: '' }

// receives a callback function in props named submit
export default function SignUpForm({ submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(false)
  const {push} = useHistory();

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

  // construct newUser object from form values
  // pass newUser to callback function in props
  // clears values state
  const handleSubmit = (event) => {
    event.preventDefault()
    // const newUser = {
    //   username: values.username.trim(),
    //   tel: values.tel,
    //   password: values.password,
    // }
    axios.post('https://water-myplants-backend.herokuapp.com/api/auth/register', {
          user:{
            username:values.username.trim(),
            tel: values.tel,
            password: values.password
          }
    })
          .then((resp) => {
          })
          .catch((err) => console.log(err))

    // submit(newUser)
    // setValues(() => initialValues)
  }

  // enables button when validation passes
  useEffect(() => {
    schema.isValid(values).then((valid) => setDisabled(() => !valid))
  }, [values])

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
          <input type='tel' name='tel' value={values.tel} onChange={handleChange} />
        </label>
        <div className='error'>
          <span>{errors.tel}</span>
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
