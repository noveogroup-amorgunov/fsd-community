import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { AppRouter } from './app-router'
import { store } from './app-store'
import './entry.css'
import { AppLayout } from './layouts/AppLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </ReduxProvider>
  </StrictMode>,
)
