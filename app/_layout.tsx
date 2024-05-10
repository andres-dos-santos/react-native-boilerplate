import { QueryProvider } from '../contexts/query'
import { ThemeProvider } from '../contexts/theme'

import { Router } from '../components/ui/router'

export default function Layout() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </QueryProvider>
  )
}
