import { useState } from 'react'
import { StyledCard } from './StyledCard'
import CreatePlantCard from './CreatePlantCard'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function PlantCard({ plant_id, nickname, species, h2o_frequency, submit }) {
  const [editing, setEditing] = useState(false)

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`https://water-myplants-backend.herokuapp.com/api/plants/${plant_id}`)
      .then((resp) => {
        console.log(resp)
      })
      .catch((err) => {
        console.log(err)
      })

    submit()
  }

  const toggleEdit = () => setEditing((prev) => !prev)

  if (editing) {
    return (
      <CreatePlantCard
        initial={{ plant_id, nickname, species, h2o_frequency }}
        cancel={toggleEdit}
        submit={submit}
      />
    )
  }

  return (
    <StyledCard>
      <div className='content'>
        <h2>{nickname}</h2>

        <div>
          <h3>Species</h3>
          <p>{species}</p>
        </div>

        <div>
          <h3>Watering Frequency</h3>
          <p>{h2o_frequency}</p>
        </div>
      </div>

      <div className='controls'>
        <button className='edit' onClick={toggleEdit}>
          Edit
        </button>
        <button className='delete' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </StyledCard>
  )
}
