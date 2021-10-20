import * as yup from 'yup'
import 'yup-phone-lite'

const username = yup
  .string()
  .trim()
  .required('Username is required')
  .min(4, 'Username must be a least 4 characters long')

const tel = yup
  .string()
  .phone('US', 'Phone number must be valid phone number')
  .required('Phone number is required')

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
