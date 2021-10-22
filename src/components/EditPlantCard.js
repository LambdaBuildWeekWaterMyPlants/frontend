import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { createPlantSchema as schema } from '../validation'
import { StyledFormCard } from './StyledFormCard'

const initialValues = { nickname: '', species: '', h2o_frequency: '' }
const initialErrors = { nickname: '', species: '', h2o_frequency: '' }

// receives initial if editing an existing plant
export default function CreatePlantCard({ initial, cancel, submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (initial)
      setValues(() => ({
        nickname: initial.nickname,
        species: initial.species,
        h2o_frequency: initial.h2o_frequency,
      }))
  }, [initial])

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

    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axiosWithAuth()
      .put(`https://water-myplants-backend.herokuapp.com/api/plants/${initial.plant_id}`, values)
      .then((resp) => {})
      .catch((err) => {
        console.log(err)
      })

    submit()
  }

  // enables button when validation passes
  useEffect(() => {
    schema.isValid(values).then((valid) => setDisabled(() => !valid))
  }, [values])

  if (!initial) return null

  return (
    <StyledFormCard>
      <div className='content'>
        <h2>Create a Plant</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>
            Nickname
            <input type='text' name='nickname' value={values.nickname} onChange={handleChange} />
          </label>
          <div className='error'>
            <span>{errors.nickname}</span>
          </div>
        </div>

        <div className='form-group'>
          <label>
            Species
            <input type='text' name='species' value={values.species} onChange={handleChange} />
          </label>
          <div className='error'>
            <span>{errors.species}</span>
          </div>
        </div>

        <div className='form-group'>
          <label>
            H2O Frequency
            <input
              type='text'
              name='h2o_frequency'
              value={values.h2o_frequency}
              onChange={handleChange}
            />
          </label>
          <div className='error'>
            <span>{errors.h2o_frequency}</span>
          </div>
        </div>

        <button className='submit' disabled={disabled}>
          Submit
        </button>

        <button className='cancel' type='button' onClick={cancel}>
          Cancel
        </button>
      </form>
    </StyledFormCard>
  )
}
