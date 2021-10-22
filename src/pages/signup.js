import { useState } from 'react'
import axios from 'axios'
import Page from '../components/Page'
import SignupForm from '../components/SignUpForm'
import { useHistory } from 'react-router-dom'

export default function Signup() {
  const [submissionError, setSubmissionError] = useState('')

  const { push } = useHistory()

  const handleSubmit = (userData) => {
    axios
      .post('https://water-myplants-backend.herokuapp.com/api/auth/register', userData)
      .then(() => {
        push('/login')
      })
      .catch((err) => {
        console.error(err)
        setSubmissionError('Server Error. Try again.')
      })
  }

  return (
    <Page>
      <SignupForm submit={handleSubmit} />
      <span className='error'>{submissionError}</span>
    </Page>
  )
}
