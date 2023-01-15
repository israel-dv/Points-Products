import React from 'react'
import { Text, TextStyle } from 'react-native'

import { COLORS } from '../../../utils/constants/productsUI'

type Heading1Props = {
  text: string
  fontSize?: number
  textAlign?: 'center' | 'right' | 'left' | 'justify' | 'auto'
  color?: string
  style?: TextStyle
  fontWeight?: 'bold' | 'normal' | '100' | '200' | '300'
}

export const Heading1 = ({
  text,
  fontSize = 32,
  textAlign = 'auto',
  color = COLORS.black,
  fontWeight = 'normal',
  style,
}: Heading1Props): React.ReactElement => {
  return (
    <Text
      style={[
        {
          fontSize,
          textAlign,
          color,
          fontWeight,
        },
        style,
      ]}
    >
      {text}
    </Text>
  )
}
