import { Link } from 'react-router-dom'
import { config } from '../config'

const Login = () => <Link to='/login'>Login</Link>
const Signup = () => <Link to='/signup'>Signup</Link>
const Update = () => <Link to='/update'>Update</Link>

export default function Header({ user }) {
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
            <Login />
            <Update />
          </>
        ) : (
          <Signup />
        )}
      </nav>
    </header>
  )
}
