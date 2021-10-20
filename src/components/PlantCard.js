import { useState } from 'react'
import { StyledCard } from './StyledCard'
import CreatePlantCard from './CreatePlantCard'

export default function PlantCard({ id, nickname, species, h2oFrequency }) {
  const [editing, setEditing] = useState(false)

  // axios.delete() or something goes here
  const handleDelete = () => {
    return null
  }

  const toggleEdit = () => setEditing((prev) => !prev)

  if (editing) {
    return (
      <CreatePlantCard
        initial={{ id, nickname, species, h2oFrequency }}
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
          <p>{h2oFrequency}</p>
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
