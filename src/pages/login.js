import Page from '../components/Page'
import LoginForm from '../components/LoginForm'

export default function Login() {
  const handleSubmit = (data) => console.log(data)

  return (
    <Page centered>
      <LoginForm submit={handleSubmit} />
    </Page>
  )
}
