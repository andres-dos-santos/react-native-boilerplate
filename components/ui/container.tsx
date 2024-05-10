import { ComponentProps } from 'react'
import { SafeAreaView } from 'react-native'

export function Container({
  style,
  ...props
}: ComponentProps<typeof SafeAreaView>) {
  return (
    <SafeAreaView style={{ flex: 1, ...(style as object) }} {...props}>
      {props.children}
    </SafeAreaView>
  )
}
