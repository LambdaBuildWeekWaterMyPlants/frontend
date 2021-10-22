import { useState, useEffect } from 'react'
import Page from '../components/Page'
import PlantCard from '../components/PlantCard'
import CreatePlantCard from '../components/CreatePlantCard'
import { StyledCreateButton } from '../components/StyledCreateButton'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useLocalUser } from '../hooks/useLocalUser'

export default function PlantsList() {
  const [plants, setPlants] = useState([])
  const [createButtonClicked, setCreateButtonClicked] = useState(false)

  const user = useLocalUser()

  const getPlants = () => {
    axiosWithAuth()
      .get('https://water-myplants-backend.herokuapp.com/api/plants')
      .then((resp) => {
        setPlants(() => resp.data)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => getPlants(), [])

  const toggleClicked = () => setCreateButtonClicked((prev) => !prev)

  const handleSubmit = () => {
    getPlants()
    toggleClicked()
  }

  if (!user) return null

  return (
    <Page>
      <h2>
        Hello, <span className='username'>{user.username}</span>
      </h2>

      {createButtonClicked ? (
        <CreatePlantCard cancel={toggleClicked} submit={handleSubmit} />
      ) : (
        <StyledCreateButton onClick={toggleClicked}>Create Plant</StyledCreateButton>
      )}

      {plants
        ? plants.map((plant) => <PlantCard key={plant.plant_id} {...plant} getPlants={getPlants} />)
        : ''}
    </Page>
  )
}
