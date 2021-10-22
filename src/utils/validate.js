import * as yup from 'yup'

export const validate = (name, value, schema, setErrors) => {
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
