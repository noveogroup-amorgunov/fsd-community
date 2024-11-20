import { Link } from 'wouter'
import css from './Header.module.css'

// 🔊 WARNING: This component should be located into shared/layout,
// because this slice don't has any reason to be a widget
// This is example of render-slot pattern for shared layout
export function Header() {
  return (
    <header className={css.root} data-fsd="widget/header">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  )
}
