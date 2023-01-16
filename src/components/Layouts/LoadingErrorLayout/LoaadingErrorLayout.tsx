import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ERROR, LOADING } from '../../../utils/constants/messages'
import { COLORS } from '../../../utils/constants/productsUI'
import { Typography } from '../../Typography/Typography'

type LoadingErrorLayoutProps = {
  type?: 'loading' | 'error'
}

export const LoadingErrorLayout = ({
  type = 'loading',
}: LoadingErrorLayoutProps): React.ReactElement => {
  return (
    <View style={styles.containerLoading}>
      <Typography.Heading1
        text={type === 'loading' ? LOADING : ERROR}
        fontWeight="bold"
        style={styles.textLoading}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerLoading: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLoading: {
    color: COLORS.gray100,
  },
})
