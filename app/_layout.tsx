import { QueryProvider } from '../contexts/query'
import { ThemeProvider } from '../contexts/theme'

import { Router } from '../components/ui/router'

import { useFonts } from '../hooks/use-fonts'

export default function Layout() {
  const fontsLoaded = useFonts()

  if (!fontsLoaded) {
    return null
  }

  return (
    <QueryProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </QueryProvider>
  )
}
