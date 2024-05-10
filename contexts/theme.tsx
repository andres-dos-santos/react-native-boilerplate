import { createContext, useCallback, useContext, useState } from 'react'
import { useColorScheme } from 'react-native'

type Theme = 'light' | 'dark'

interface ThemeContextData {
  setTheme(theme: Theme): void
  theme: Theme
  toggleTheme(): void
}

export const ThemeContext = createContext({} as ThemeContextData)

export const INVERTED_THEME = {
  light: 'dark',
  dark: 'light',
} as const

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme()

  const [theme, setTheme] = useState(colorScheme || 'light')

  const toggleTheme = useCallback(() => {
    setTheme((prev) => INVERTED_THEME[prev])
  }, [])

  return (
    <ThemeContext.Provider value={{ setTheme, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
