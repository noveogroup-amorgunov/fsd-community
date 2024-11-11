import { Link } from 'wouter'

export function NotFound() {
  return (
    <main>
      <h1>Page Not Found</h1>
      <p>
        Page not found.
        <Link href="/">Return to main page</Link>
      </p>
    </main>
  )
}
