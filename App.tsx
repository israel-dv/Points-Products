import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AppNavigator } from './src/components/Navigators/AppNavigator'

const queryClient = new QueryClient()

const App = (): React.ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}

export default App
