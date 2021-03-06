import * as yup from 'yup'

const username = yup
  .string()
  .trim()
  .required('Username is required')
  .min(4, 'Username must be a least 4 characters long')

const phoneNumber = yup
  .string()
  .required('Phone number is required')
  .test('len', 'Must be a valid 10 digit number', (val) => val.length === 10)

const password = yup.string().required('Password is required')

export const signUpSchema = yup.object().shape({
  username: username,
  phoneNumber: phoneNumber,
  password: password,
  confirmPassword: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], ''),
})

export const loginSchema = yup.object().shape({
  username: username,
  password: password,
})

export const updateSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .test('len', 'Must be a valid 10 digit number', (val) => val.length === 10 || val.length === 0),
  password: password,
  newPassword: yup.string().required('New password is required'),
  confirmNewPassword: yup
    .string()
    .required('New password confirmation is required')
    .oneOf([yup.ref('newPassword'), null], ''),
})

export const confirmSchema = yup.object().shape({
  password: password,
})

export const createPlantSchema = yup.object().shape({
  nickname: yup.string().trim().required('Nickname is required'),
  species: yup.string().trim().required('Species is required'),
  h2o_frequency: yup.string().trim().required('Watering frequency is required'),
})
