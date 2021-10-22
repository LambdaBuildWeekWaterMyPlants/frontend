import Page from '../components/Page'
import styled from 'styled-components'
import image from '../static/01.jpg'

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
  }

  img {
    width: 80%;
    filter: ${({ theme }) => theme.cardShadow};
  }

  p {
    margin-top: 2%;
    font-size: 1.2rem;
  }
`

export default function Home() {
  return (
    <Page>
      <HomeContainer>
        <img src={image} alt='' />

        <p>Take inventory of your plants and track their watering frequency.</p>
      </HomeContainer>
    </Page>
  )
}
