import { Link } from 'wouter'

export function NotFound() {
  return (
    <main>
      <h1>404 🥱</h1>
      <p>
        Page not found.
        <Link href="/">Return to main page</Link>
      </p>
    </main>
  )
}
