import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'

export type ButtonProps = TouchableOpacityProps

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      {props.children}
    </TouchableOpacity>
  )
}
