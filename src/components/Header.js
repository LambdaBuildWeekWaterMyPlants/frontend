import config from '../config'

export default function Header() {
  return (
    <header>
      <h1>{config.title}</h1>
    </header>
  )
}
