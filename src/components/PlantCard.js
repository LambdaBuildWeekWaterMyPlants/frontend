import { useState } from 'react'
import { StyledCard } from './StyledCard'
import CreatePlantCard from './CreatePlantCard'
import { useParams } from 'react-router'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function PlantCard({ id, nickname, species, h2o_frequency }) {
  const [editing, setEditing] = useState(false)
  const {plant_id} = useParams();

    console.log("current id", id)

  // axios.delete() or something goes here
  const handleDelete = () => {
      axiosWithAuth()
      .delete('https://water-myplants-backend.herokuapp.com/api/plants/:id')
      .then(resp => {
        console.log(resp)

      }).catch(err => {
        console.log(err)
      })
  }

  const toggleEdit = () => setEditing((prev) => !prev)

  if (editing) {
    return (
      <CreatePlantCard
        initial={{ id, nickname, species, h2o_frequency }}
        cancel={toggleEdit}
        submit={null}
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
