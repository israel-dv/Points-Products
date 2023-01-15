import React from 'react'
import { View } from 'react-native'

import { Typography } from '../../Typography/Typography'
import { cardPointsStyles } from './CardPointsStyles'

type CardPointsProps = {
  month: string
  points: string
}

export const CardPoints = ({
  month,
  points,
}: CardPointsProps): React.ReactElement => {
  return (
    <View style={[cardPointsStyles.card, cardPointsStyles.cardShadow]}>
      <View style={cardPointsStyles.monthContainer}>
        <Typography.Text1
          text={month}
          fontWeight="bold"
          style={{ color: 'white' }}
        />
      </View>
      <View style={cardPointsStyles.pointsContainer}>
        <Typography.Heading1
          text={points}
          fontWeight="bold"
          style={{ color: 'white' }}
        />
      </View>
    </View>
  )
}
