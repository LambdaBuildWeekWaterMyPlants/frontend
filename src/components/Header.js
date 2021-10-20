import { Link } from 'react-router-dom'
import { config } from '../config'

import Logout from './Logout'
const Login = () => <Link to='/login'>Login</Link>
const Signup = () => <Link to='/signup'>Signup</Link>
const Update = () => <Link to='/update'>Update</Link>

export default function Header({ user }) {
  const handleLogout = () => console.log('handleLogout => src/components/Header')

  return (
    <header>
      <Link to='/'>
        <h1>{config.title}</h1>
      </Link>

      {/* Shows Login and Update when user prop exists */}
      {/* Shows Signup when user prop doesn't exist */}
      <nav>
        {user ? (
          <>
            <Update />
            <Logout click={handleLogout} />
          </>
        ) : (
          <>
            <Login />
            <Signup />
          </>
        )}
      </nav>
    </header>
  )
}
