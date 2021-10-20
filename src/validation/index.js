import * as yup from 'yup'

const username = yup
  .string()
  .trim()
  .required('Username is required')
  .min(4, 'Username must be a least 4 characters long')

const tel = yup
  .string()
  .required('Phone number is required')
  .test('len', 'Must be a valid 10 digit number', (val) => val.length === 10)

const password = yup.string().required('Password is required')

export const signUpSchema = yup.object().shape({
  username: username,
  tel: tel,
  password: password,
})

export const loginSchema = yup.object().shape({
  username: username,
  password: password,
})

export const updateSchema = yup.object().shape({
  tel: tel,
  password: password,
})

export const confirmSchema = yup.object().shape({
  password: password,
})
