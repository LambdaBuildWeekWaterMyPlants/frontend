import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { createPlantSchema as schema } from '../validation'
import { StyledFormCard } from './StyledFormCard'

/* plant-objects structure:
{
  plant_id: string, ???
  nickname: string,
  species: string,
  h2o_frequency: string
}
*/

const initialValues = { nickname: '', species: '', h2oFrequency: '' }
const initialErrors = { nickname: '', species: '', h2oFrequency: '' }

// receives initial if editing an existing plant
export default function CreatePlantCard({ initial = null, cancel, submit }) {
  const [values, setValues] = useState(initial || initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(false)

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

  const handleSubmit = (event) => {
    event.preventDefault()

    // axios.put goes here

    // submit() <- not necessary?
  }

  // enables button when validation passes
  useEffect(() => {
    schema.isValid(values).then((valid) => setDisabled(() => !valid))
  }, [values])

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
              name='h2oFrequency'
              value={values.h2oFrequency}
              onChange={handleChange}
            />
          </label>
          <div className='error'>
            <span>{errors.h2oFrequency}</span>
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
