import { useState, useEffect } from 'react'
import Page from '../components/Page'
import PlantCard from '../components/PlantCard'
import CreatePlantCard from '../components/CreatePlantCard'
import { StyledCreateButton } from '../components/StyledCreateButton'

/* plant-objects structure:
{
  plant_id: string, ???
  nickname: string,
  species: string,
  h2o_frequency: string
}
*/

// test plant for display
const testPlant = {
  id: 1,
  nickname: 'Test Plant',
  species: 'Test Species',
  h2o_frequency: 'twice daily',
}

export default function PlantsList() {
  const [plants, setPlants] = useState([]) // I assume this will be an array of plant-objects
  const [createButtonClicked, setCreateButtonClicked] = useState(false)

  // setPlants using axios

  // simple function that camelCases data received from server
  const filterData = (data) => ({
    id: data.id,
    nickname: data.nickname,
    species: data.species,
    h2oFrequency: data.h2o_frequency,
  })

  // simulates update plants state using data from axios
  useEffect(() => {
    setPlants((prev) => [...prev, filterData(testPlant)])
  }, [])

  const toggleClicked = () => setCreateButtonClicked((prev) => !prev)

  return (
    <Page>
      <h2>Plants</h2>

      {createButtonClicked ? (
        <CreatePlantCard cancel={toggleClicked} />
      ) : (
        <StyledCreateButton onClick={toggleClicked}>Create Card</StyledCreateButton>
      )}

      {plants.map((plant) => (
        <PlantCard key={plant.id} {...plant} />
      ))}
    </Page>
  )
}
