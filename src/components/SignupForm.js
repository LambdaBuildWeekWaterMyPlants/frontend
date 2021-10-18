import { useState } from 'react'

const initialValues = { username: '', tel: '', password: '' }
const initialErrors = { username: '', tel: '', password: '' }

export default function SignUp() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)

  return (
    <form>
      <label>
        Username
        <input type='text' />
      </label>

      <label>
        Phone Number
        <input type='tel' />
      </label>

      <label>
        Password
        <input type='password' />
      </label>
    </form>
  )
}
