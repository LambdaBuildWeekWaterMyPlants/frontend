import { useState, useEffect } from 'react'
import Page from '../components/Page'
import PlantCard from '../components/PlantCard'
import CreatePlantCard from '../components/CreatePlantCard'
import { StyledCreateButton } from '../components/StyledCreateButton'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function PlantsList() {
  const [plants, setPlants] = useState([]) // I assume this will be an array of plant-objects
  const [createButtonClicked, setCreateButtonClicked] = useState(false)

  // setPlants using axios

  // simple helper function that camelCases data received from server
  // e.x. setPlants(filterData(res.data))
  // const filterData = (data) => ({
  //   id: data.id,
  //   nickname: data.nickname,
  //   species: data.species,
  //   h2oFrequency: data.h2o_frequency,
  // })

  useEffect(() => {
    axiosWithAuth()
    .get('https://water-myplants-backend.herokuapp.com/api/plants')
    .then((resp) => {
        setPlants(resp);
    })
    .catch((err)=>{

    })
    // setPlants((prev) => [...prev, filterData(testPlant(1)), filterData(testPlant(2))])
  }, [])

  const toggleClicked = () => setCreateButtonClicked((prev) => !prev)

  return (
    <Page>
      <h2>Plants</h2>

      {createButtonClicked ? (
        <CreatePlantCard cancel={toggleClicked} />
      ) : (
        <StyledCreateButton onClick={toggleClicked}>Create Plant</StyledCreateButton>
      )}

      {plants.map((plant) => (
        <PlantCard key={plant.plant_id} {...plant} />
      ))}
    </Page>
  )
}
