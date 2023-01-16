import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { Home } from '../../screens/HomeScreen'
import { ProductDetailsScreen } from '../../screens/ProductDetailsScreen'
import { StackParamList } from '../../utils/types/navigators.types'

const Stack = createNativeStackNavigator<StackParamList>()

export const AppNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  )
}
