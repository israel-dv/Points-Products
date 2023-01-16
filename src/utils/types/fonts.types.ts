import { TextStyle } from 'react-native'

export type HeadingType = {
  text: string
  fontSize?: number
  textAlign?: 'center' | 'right' | 'left' | 'justify' | 'auto'
  color?: string
  style?: TextStyle
  fontWeight?: 'bold' | 'normal' | '100' | '200' | '300'
}

export type TextRegulartype = {
  text?: string
  style?: TextStyle
  fontWeight?: 'bold' | 'normal' | '100' | '200' | '300'
}
