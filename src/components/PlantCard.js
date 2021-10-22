import { useState } from 'react'
import { StyledCard } from './StyledCard'
import EditPlantCard from './EditPlantCard'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function PlantCard({ plant_id, nickname, species, h2o_frequency, getPlants }) {
  const [editing, setEditing] = useState(false)

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`https://water-myplants-backend.herokuapp.com/api/plants/${plant_id}`)
      .then(() => {
        getPlants()
        toggleEdit()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleEditSubmit = (values) => {
    axiosWithAuth()
      .put(`https://water-myplants-backend.herokuapp.com/api/plants/${plant_id}`, values)
      .then((resp) => {
        getPlants()
        toggleEdit()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const toggleEdit = () => setEditing((prev) => !prev)

  if (editing) {
    return (
      <EditPlantCard
        initial={{ plant_id, nickname, species, h2o_frequency }}
        cancel={toggleEdit}
        submit={handleEditSubmit}
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
