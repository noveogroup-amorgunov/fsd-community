import type { ReactNode } from 'react'
import css from './Layout.module.css'

type Props = {
  headerSlot: ReactNode
  children: ReactNode
}

export function Layout({ headerSlot, children }: Props) {
  return (
    <div className={css.root} data-fsd="shared/ui/layout">
      <div className={css.header}>
        {headerSlot}
      </div>
      <div className={css.main}>
        {children}
      </div>
      <footer className={css.footer}>
        <a href="https://github.com/noveogroup-amorgunov/fsd-community/tree/main/examples/redux">Github repo</a>
      </footer>
    </div>
  )
}
