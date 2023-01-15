import React from 'react'
import { Text, ViewStyle } from 'react-native'

import { COLORS } from '../../../utils/constants/productsUI'

type Heading1Props = {
  text: string
  fontSize?: number
  textAlign?: 'center' | 'right' | 'left' | 'justify' | 'auto'
  color?: string
  style?: ViewStyle
}

export const Heading3 = ({
  text,
  fontSize = 20,
  textAlign = 'auto',
  color = COLORS.black,
  style,
}: Heading1Props): React.ReactElement => {
  return (
    <Text
      style={{
        fontSize,
        textAlign,
        color,
        fontWeight: '800',
        ...style,
      }}
    >
      {text}
    </Text>
  )
}
