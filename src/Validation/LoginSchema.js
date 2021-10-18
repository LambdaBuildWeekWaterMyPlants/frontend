import * as yup from 'yup'
export const schema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Username is a required field')
    .min(4, 'Username min length must be 4characters'),
  password: yup.string().required('Password of any length required'),
})