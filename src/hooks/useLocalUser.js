import { useState, useEffect } from 'react'

export function useLocalUser(getter) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const localUser = localStorage.getItem('user')
    if (localUser) {
      const parsedUser = JSON.parse(localUser)
      setUser(() => parsedUser)
    }
  }, [getter])

  return user
}
