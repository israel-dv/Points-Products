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

export const Heading1 = ({
  text,
  fontSize = 32,
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
        ...style,
      }}
    >
      {text}
    </Text>
  )
}
