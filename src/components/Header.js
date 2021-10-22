import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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

export default function Header({ user = null }) {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setLoggedIn(false)
  }

  useEffect(() => {
    if (user) setLoggedIn(true)
  }, [user])

  return (
    <HeaderContainer>
      <div>
        <Link to='/'>
          <h1>{config.title}</h1>
        </Link>

        <nav>
          {loggedIn ? (
            <>
              <Link to='/update'>Update</Link>
              <Link onClick={handleLogout} to='/login'>
                Logout
              </Link>
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
