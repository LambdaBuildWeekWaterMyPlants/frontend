import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logout from './Logout'
import { config } from '../config'

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

export default function Header() {
  const handleLogout = () => console.log('handleLogout => src/components/Header')

  return (
    <HeaderContainer>
      <div>
        <Link to='/'>
          <h1>{config.title}</h1>
        </Link>

        {/* Shows Login and Update when user prop exists */}
        {/* Shows Signup when user prop doesn't exist */}
        <nav>
          {true ? ( // TODO: create condition for showing correct nav items
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
