import { useState } from 'react'
import { Route } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Update from './pages/update'

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <Layout user={user}>
      <Route exact path='/'>
        <Home user={user} />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/update'>
        <Update />
      </Route>
    </Layout>
  )
}
