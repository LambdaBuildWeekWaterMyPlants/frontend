import Page from '../components/Page'
import { useEffect } from 'react'

import { useHistory } from 'react-router-dom'

export default function Home({ user }) {
  const { push } = useHistory()

  const isAuthenticated = () => {
    const token = localStorage.getItem('token')
    if (token) return true
    return false
  }

  useEffect(() => {
    if (isAuthenticated()) push('/plants-list')
    else push('/login')
  }, [push])

  if (user)
    return (
      <Page>
        <div>Show plants when logged in</div>
      </Page>
    )

  return (
    <Page>
      <div>Show landing page when not logged in</div>
    </Page>
  )
}
