import React from 'react'
import { TouchableOpacity, View, ViewStyle } from 'react-native'

import { Typography } from '../Typography/Typography'
import { buttonStyles } from './RoundedButtonStyles'

type RoundedButtonProps = {
  text: string
  style?: ViewStyle
  handleClcik: () => void
}

export const RoundedButton = ({
  text,
  style = {},
  handleClcik,
}: RoundedButtonProps): React.ReactElement => {
  return (
    <TouchableOpacity
      onPress={handleClcik}
      style={[buttonStyles.container, style]}
    >
      <View style={buttonStyles.button}>
        <Typography.Text2
          text={text}
          style={buttonStyles.text}
          fontWeight="bold"
        />
      </View>
    </TouchableOpacity>
  )
}
