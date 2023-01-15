import { Text, TextStyle } from 'react-native'

import { textStyles } from './Text2Styles'

type TextRegular2 = {
  text?: string
  style?: TextStyle
  fontWeight?: 'bold' | 'normal' | '100' | '200' | '300'
}

export const Text2 = ({ text, style, fontWeight = 'normal' }: TextRegular2) => {
  return <Text style={[textStyles.text, { fontWeight, ...style }]}>{text}</Text>
}
