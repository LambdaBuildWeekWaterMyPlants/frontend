import { Route } from 'react-router-dom'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import PlantsList from './pages/plants-list'
import Update from './pages/update'

export default function App() {
  return (
    <Layout>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <PrivateRoute path='/plants-list'>
        <PlantsList />
      </PrivateRoute>
      <PrivateRoute path='/update'>
        <Update />
      </PrivateRoute>
      <Route exact path='/'>
        <Home />
      </Route>
    </Layout>
  )
}
