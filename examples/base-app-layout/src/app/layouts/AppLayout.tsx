import type { ReactNode } from 'react'
import { Layout } from '~shared/ui'
import { Header } from '~widgets/header'

type Props = {
  children: ReactNode
}

/**
 * ✅ FSD Best practice:
 *
 * (1) Divide layout in two modules: dumb layout grid (`@shared/ui/layout/*`)
 * and smart layout with widgets (this file)
 *
 * (2) Avoid importing from higher layers with dependency inversion
 * via the render prop pattern
 */
export function AppLayout({ children }: Props) {
  return (
    <Layout
      headerSlot={<Header />}
      footerSlot={<div>footer slot</div>}
    >
      {children}
    </Layout>
  )
}
