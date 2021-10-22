import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'
import { useLocalUser } from './hooks/useLocalUser'

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import PlantsList from './pages/plants-list'
import Update from './pages/update'

export default function App() {
  const [getter, setGetter] = useState(false)

  const user = useLocalUser(getter)

  const handleGet = () => {
    setGetter((prev) => !prev)
  }

  useEffect(() => {
    setGetter((prev) => !prev)
  }, [])

  return (
    <Layout user={user}>
      <Route path='/login'>
        <Login get={handleGet} />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <PrivateRoute path='/plants-list' component={PlantsList} />
      <PrivateRoute path='/update' component={Update} />
      <Route exact path='/'>
        <Home user={user} />
      </Route>
    </Layout>
  )
}
