import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, ViewStyle } from 'react-native'
import { Edge, SafeAreaView } from 'react-native-safe-area-context'

import { layoutStyles } from './SafeLayoutStyles'

type SafeLayoutProps = {
  children?: React.ReactNode
  style?: ViewStyle
  edges?: Edge[]
}

export const SafeLayout = ({
  children,
  style = {},
  edges = ['top'],
}: SafeLayoutProps): React.ReactElement => {
  return (
    <SafeAreaView edges={edges} style={[layoutStyles.container, { ...style }]}>
      <StatusBar />
      <View style={{ display: 'flex', width: '100%' }}>{children}</View>
    </SafeAreaView>
  )
}
