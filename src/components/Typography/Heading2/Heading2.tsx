import React from 'react'
import { Text } from 'react-native'

import { COLORS } from '../../../utils/constants/productsUI'
import { HeadingType } from '../../../utils/types/fonts.types'

export const Heading2 = ({
  text,
  fontSize = 24,
  textAlign = 'auto',
  color = COLORS.black,
  fontWeight = 'normal',
  style,
}: HeadingType): React.ReactElement => {
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
