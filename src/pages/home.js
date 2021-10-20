import Page from '../components/Page'

export default function Home({ user }) {
  if (user)
    return (
      <Page>
        <div>Show plants when logged in</div>
      </Page>
    )

  return (
    <Page>
      <div>Show landing page when not logged in</div>
    </Page>
  )
}
