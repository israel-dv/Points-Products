import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { hideAsync } from 'expo-splash-screen'
import React, { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { LoadingErrorLayout } from './src/components/Layouts/LoadingErrorLayout'
import { AppNavigator } from './src/components/Navigators/AppNavigator'

const queryClient = new QueryClient()

const App = (): React.ReactElement => {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line global-require
    'Inter-Black': require('./assets/fonts/Avenir.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return <LoadingErrorLayout type="loading" />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}

export default App
