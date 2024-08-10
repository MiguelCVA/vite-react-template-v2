import { Helmet, HelmetProvider } from 'react-helmet-async'
import './index.css'
import { Theme } from './components/_layout'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { queryClient } from './lib/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { config } from './config'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate={`%s | ${config.title}`} />
      <Theme.ThemeProvider
        defaultTheme="system"
        storageKey="theme"
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Toaster richColors />
        </QueryClientProvider>
      </Theme.ThemeProvider>
    </HelmetProvider>
  )
}
