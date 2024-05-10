import { Text, type TextProps } from 'react-native'

import { useTheme } from '../../contexts/theme'

import { COLORS } from '../../styles/colors'

export type PProps = TextProps

export function P(props: PProps) {
  const { theme } = useTheme()

  return (
    <Text style={{ color: COLORS[theme].text, ...(props.style as object) }}>
      {props.children}
    </Text>
  )
}
