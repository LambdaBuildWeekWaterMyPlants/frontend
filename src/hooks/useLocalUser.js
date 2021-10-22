import { useState, useEffect } from 'react'

export function useLocalUser(get) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const localUser = localStorage.getItem('user')
    if (localUser) {
      const parsedUser = JSON.parse(localUser)
      setUser(() => parsedUser)
    }
  }, [get])

  return user
}
