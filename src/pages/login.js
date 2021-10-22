import { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import Page from '../components/Page'
import LoginForm from '../components/LoginForm'

export default function Login({ get }) {
  const [submissionError, setSubmissionError] = useState('')

  const { push } = useHistory()

  const handleSubmit = (userData) => {
    axios
      .post('https://water-myplants-backend.herokuapp.com/api/auth/login', userData)
      .then((resp) => {
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('user', JSON.stringify(resp.data.user))

        get()
        push('/plants-list')
      })
      .catch((err) => {
        console.error(err)
        setSubmissionError('Login Error. Try again.')
      })
  }

  return (
    <Page>
      <LoginForm submit={handleSubmit} />
      <span className='error'>{submissionError}</span>
    </Page>
  )
}
