import { Link } from 'wouter'
import css from './Header.module.css'

export function Header() {
  return (
    <header className={css.root} data-fsd="widget/header">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  )
}
