import { useState, useEffect } from 'react'
import Page from '../components/Page'
import PlantCard from '../components/PlantCard'
import CreatePlantCard from '../components/CreatePlantCard'
import { StyledCreateButton } from '../components/StyledCreateButton'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function PlantsList() {
  const [plants, setPlants] = useState([]) // I assume this will be an array of plant-objects
  const [createButtonClicked, setCreateButtonClicked] = useState(false)

  const getPlants = () => {
    axiosWithAuth()
      .get('https://water-myplants-backend.herokuapp.com/api/plants')
      .then((resp) => {
        setPlants(resp.data)
      })
      .catch((err) => {})
  }

  useEffect(() => getPlants(), [])

  const toggleClicked = () => setCreateButtonClicked((prev) => !prev)

  const handleSubmit = () => getPlants()

  return (
    <Page>
      <h2>Plants</h2>

      {createButtonClicked ? (
        <CreatePlantCard cancel={toggleClicked} submit={handleSubmit} />
      ) : (
        <StyledCreateButton onClick={toggleClicked}>Create Plant</StyledCreateButton>
      )}

      {plants ? plants.map((plant) => <PlantCard key={plant.plant_id} {...plant} />) : ''}
    </Page>
  )
}
