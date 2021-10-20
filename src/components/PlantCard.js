import { StyledCard } from './StyledCard'

/* plant-objects structure:
{
  plant_id: string, ???
  nickname: string,
  species: string,
  h2o_frequency: string
}
*/

export default function PlantCard({ nickname, species, h2oFrequency }) {
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
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
      </div>
    </StyledCard>
  )
}
