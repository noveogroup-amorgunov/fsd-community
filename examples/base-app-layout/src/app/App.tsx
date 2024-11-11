import { AboutPage } from '~pages/about'
import { HomePage } from '~pages/home'
import { NotFound } from '~pages/not-found'
import { Route, Switch } from 'wouter'
import { AppLayout } from './layouts/AppLayout'

export function App() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </AppLayout>
  )
}
