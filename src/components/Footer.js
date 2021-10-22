import { config } from '../config'

export default function Footer() {
  return (
    <footer>
      <a href={config.repository} target='_blank' rel='noopener noreferrer'>
        Source
      </a>
    </footer>
  )
}
