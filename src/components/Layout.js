import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background: ${({ theme }) => theme.lightGray};
  color: ${({ theme }) => theme.darkGray};

  footer {
    margin: 1% 0;
    a {
      transition: 2ms;
    }
  }

  h1:hover,
  a:hover {
    color: ${({ theme }) => theme.darkerGreen};
  }
`

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 70%;
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
