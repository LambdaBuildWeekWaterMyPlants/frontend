import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logout from './Logout'
import { config } from '../config'
import { useHistory } from 'react-router-dom'

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 2% 0;
  width: 100vw;

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 80%;

    h1 {
      font-size: 2.4rem;
    }

    nav {
      display: flex;
      font-size: 1.2rem;
      justify-content: space-around;
      width: 25%;

      * {
        transition: 2ms;
      }
    }
  }
`

export default function Header({ user }) {
  const { push } = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    push('/login')
  }

  return (
    <HeaderContainer>
      <div>
        <Link to='/'>
          <h1>{config.title}</h1>
        </Link>

        <nav>
          {!!user ? (
            <>
              <Link to='/update'>Update</Link>
              <Logout click={handleLogout} />
            </>
          ) : (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>
            </>
          )}
        </nav>
      </div>
    </HeaderContainer>
  )
}
