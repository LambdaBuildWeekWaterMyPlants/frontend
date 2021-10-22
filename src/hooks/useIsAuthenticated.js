import { useState, useEffect } from 'react'

export function useIsAuthenticated() {
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setIsAuthenticated(true)
    else setIsAuthenticated(false)
  }, [])

  return isAuthenticated
}
