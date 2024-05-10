import { StatusBar as ExpoStatusBar } from 'expo-status-bar'

import { INVERTED_THEME, useTheme } from '../../contexts/theme'

type Props = {
  isInverted?: boolean
}

export function StatusBar({ isInverted = false }: Props) {
  const { theme } = useTheme()

  return <ExpoStatusBar style={isInverted ? theme : INVERTED_THEME[theme]} />
}
