import { useState } from 'react'
import { Route } from 'react-router-dom'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import PlantsList from './pages/plants-list'
import Update from './pages/update'

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <Layout>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/plants-list'>
        <PlantsList />
      </Route>
      <PrivateRoute path='/update'>
        <Update />
      </PrivateRoute>
      <Route exact path='/'>
        <Home />
      </Route>
    </Layout>
  )
}
