import React from 'react'
import { Text } from 'react-native'

import { COLORS } from '../../../utils/constants/productsUI'
import { HeadingType } from '../../../utils/types/fonts.types'

export const Heading3 = ({
  text,
  fontSize = 20,
  textAlign = 'auto',
  color = COLORS.black,
  style,
}: HeadingType): React.ReactElement => {
  return (
    <Text
      style={[
        {
          fontSize,
          textAlign,
          color,
          fontWeight: '800',
          fontFamily: 'Avenir',
        },
        style,
      ]}
    >
      {text}
    </Text>
  )
}
