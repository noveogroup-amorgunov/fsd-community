import type { ReactNode } from 'react'
import css from './Layout.module.css'

type Props = {
  headerSlot: ReactNode
  footerSlot: ReactNode
  children: ReactNode
}

export function Layout({ headerSlot, footerSlot, children }: Props) {
  return (
    <div className={css.root} data-fsd="shared/ui/layout">
      <div className={css.header}>
        {headerSlot}
      </div>
      <div className={css.main}>
        {children}
      </div>
      <footer className={css.footer}>
        {footerSlot}
      </footer>
    </div>
  )
}
