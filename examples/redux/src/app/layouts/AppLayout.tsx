import type { ReactNode } from 'react'
import { Layout } from '~shared/ui'
import { Header } from '~widgets/header'

type Props = {
  children: ReactNode
}

// For more information see examples/base-app-layout
// @see https://github.com/noveogroup-amorgunov/fsd-community/tree/main/examples/base-app-layout
export function AppLayout({ children }: Props) {
  return (
    <Layout headerSlot={<Header />}>
      {children}
    </Layout>
  )
}
