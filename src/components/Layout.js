import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContainer = styled.main`
  flex-grow: 1;
  width: 80%;
`

export default function Layout({ children }) {
  return (
    <AppContainer>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </AppContainer>
  )
}
