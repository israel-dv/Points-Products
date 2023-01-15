import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { SafeLayout } from '../../components/SafeLayout'
import { useProducts } from '../../hooks/useProducts'

export const Home = () => {
  // const { data, isLoading, isError } = useProducts()

  return (
    <SafeLayout>
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    </SafeLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
