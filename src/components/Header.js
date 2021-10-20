import { config } from '../config'

export default function Header() {
  return (
    <header>
      <h1>{config.title}</h1>

      <nav>
        <input type='text' />
      </nav>
    </header>
  )
}
