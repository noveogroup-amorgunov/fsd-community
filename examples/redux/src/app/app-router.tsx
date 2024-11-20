import { Route, Switch } from 'wouter'
import { AboutPage } from '~pages/about'
import { HomePage } from '~pages/home'
import { NotFound } from '~pages/not-found'

export function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}
