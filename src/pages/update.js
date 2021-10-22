import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Page from '../components/Page'
import UpdateForm from '../components/UpdateForm'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function Update() {
  const [submissionError, setSubmissionError] = useState('')

  const { push } = useHistory()

  const [user, setUser] = useState(null)

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'))
    if (localUser) {
      console.log(localUser)

      setUser(() => localUser)
    }
  }, [])

  const handleSubmit = (userData) => {
    axiosWithAuth()
      .put(`https://water-myplants-backend.herokuapp.com/api/users/${user.user_id}`, userData)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))

        push('/plants-list')
      })
      .catch((err) => {
        console.error(err)
        setSubmissionError('Server Error. Try again.')
      })
  }

  return (
    <Page>
      <UpdateForm user={user} submit={handleSubmit} />
      <span className='error'>{submissionError}</span>
    </Page>
  )
}
