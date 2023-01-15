import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Home } from './src/screens/Home'

const queryClient = new QueryClient()

const App = (): React.ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}

export default App
