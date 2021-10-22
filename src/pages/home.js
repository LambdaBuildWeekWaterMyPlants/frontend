import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function Home({ user }) {
  const { push } = useHistory()

  useEffect(() => {
    if (user) push('/plants-list')
    else push('/login')
  })

  return null
}
