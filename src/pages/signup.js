import Page from '../components/Page'
import SignupForm from '../components/SignUpForm'

export default function Signup() {
  const handleSubmit = (data) => console.log(data)

  return (
    <Page>
      <SignupForm submit={handleSubmit} />
    </Page>
  )
}
