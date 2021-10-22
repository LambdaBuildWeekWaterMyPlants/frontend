import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Page from '../components/Page'
import UpdateForm from '../components/UpdateForm'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useLocalUser } from '../hooks/useLocalUser'

export default function Update() {
  const [submissionError, setSubmissionError] = useState('')

  const { push } = useHistory()
  const user = useLocalUser()

  const handleSubmit = (userData) => {
    const valuesToUpdate = {}
    for (const [key, value] of Object.entries(userData)) {
      if (value !== '') Object.assign(valuesToUpdate, { [key]: value })
    }

    if (user.user_id) {
      if (!valuesToUpdate) return false

      axiosWithAuth()
        .put(
          `https://water-myplants-backend.herokuapp.com/api/users/${user.user_id}`,
          valuesToUpdate
        )
        .then((res) => {
          console.log(res)

          localStorage.setItem(
            'user',
            JSON.stringify({
              user_id: res.data.user_id,
              username: res.data.username,
              phoneNumber: res.data.phoneNumber,
            })
          )
          console.log(res)

          push('/plants-list')
        })
        .catch((err) => {
          console.error(err)
          setSubmissionError('Server Error. Try again.')
        })
    }
  }

  if (!user) return null

  return (
    <Page>
      <UpdateForm user={user} submit={handleSubmit} />
      <span className='error'>{submissionError}</span>
    </Page>
  )
}
