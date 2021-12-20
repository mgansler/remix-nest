import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix with Nest.js</h1>
      <ul>
        <li>
          <Link to={'users'}>Users (handled by Remix)</Link>
        </li>
        <li>
          <a href={'/api'}>API (handled by Nest.js)</a>
        </li>
      </ul>
    </div>
  )
}
