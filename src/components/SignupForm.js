import { useState } from 'react'

const initialValues = { username: '', tel: '', password: '' }
const initialErrors = { username: '', tel: '', password: '' }

export default function SignUp() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)

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

      <button>Signup</button>
    </form>
  )
}
