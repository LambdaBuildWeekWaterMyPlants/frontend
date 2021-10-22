import { useState, useEffect } from 'react'

export default function useIsAuthenticated() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const localUser = localStorage.getItem('user')
    if (localUser) setUser(() => localUser)
  }, [])

  return [!!user]
}
