import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Page from '../components/Page'

export default function Home({ user }) {
  const { push } = useHistory()

  useEffect(() => {
    if (user) push('/plants-list')
  }, [user, push])

  if (!user) {
    return (
      <Page>
        <div>Home</div>
      </Page>
    )
  }

  return (
    <Page>
      <div>Home</div>
    </Page>
  )
}
