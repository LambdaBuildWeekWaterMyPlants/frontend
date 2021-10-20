import Page from '../components/Page'
import UpdateForm from '../components/UpdateForm'

export default function Update() {
  const handleSubmit = (data) => console.log(data)

  return (
    <Page centered>
      <UpdateForm submit={handleSubmit} />
    </Page>
  )
}
