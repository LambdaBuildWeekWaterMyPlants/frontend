import * as yup from 'yup'

const username = yup
  .string()
  .trim()
  .required('Username is required')
  .min(4, 'Username must be a least 4 characters long')

const tel = yup
  .string()
  .required('Phone number is required')
  .test('len', 'Must be a valid 10-digit phone number', (val) => val.length === 10)
  .matches(/^[0-9]/, 'Phone number is not valid')

const password = yup.string().required('Password is required')

// TODO: find a better way to validate a phone number
export const signUpSchema = yup.object().shape({
  username: username,
  tel: tel,
  password: password,
})
