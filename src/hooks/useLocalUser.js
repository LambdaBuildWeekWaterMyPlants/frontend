import { useState, useEffect } from 'react'

export function useLocalUser() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'))
    if (localUser) setUser(localUser)
  }, [])

  return user
}
