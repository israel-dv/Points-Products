import { Text, TextStyle } from 'react-native'

import { textStyles } from './Text1Styles'

type TextRegular1 = {
  text?: string
  style?: TextStyle
  fontWeight?: 'bold' | 'normal' | '100' | '200' | '300'
}

export const Text1 = ({ text, style, fontWeight = 'normal' }: TextRegular1) => {
  return <Text style={[textStyles.text, { fontWeight, ...style }]}>{text}</Text>
}
