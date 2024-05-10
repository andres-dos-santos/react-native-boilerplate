import { Stack } from 'expo-router'

import { useTheme } from '../../contexts/theme'

import { COLORS } from '../../styles/colors'

export function Router() {
  const { theme } = useTheme()

  return (
    <Stack
      screenOptions={{
        animation: 'ios',
        animationDuration: 200,
        headerShown: false,
        contentStyle: { backgroundColor: COLORS[theme].background },
      }}
    />
  )
}
