import React from 'react'
import { StyleSheet, View } from 'react-native'

import { CardPoints } from '../../components/CardPoints'
import { SafeLayout } from '../../components/SafeLayout'
import { Typography } from '../../components/Typography/Typography'
import { useProducts } from '../../hooks/useProducts'
import { NAME, POINTS, WELCOME_BACK } from '../../utils/constants/messages'
import { COLORS } from '../../utils/constants/productsUI'
import { homeStyles } from './HomeStyles'

export const Home = () => {
  // const { data, isLoading, isError } = useProducts()

  return (
    <SafeLayout>
      <View style={styles.titlesContainer}>
        <Typography.Heading3 text={WELCOME_BACK} />
        <Typography.Text1 text={NAME} />
      </View>
      <Typography.Text2
        text={POINTS}
        fontWeight="bold"
        style={{ color: COLORS.gray100, paddingVertical: 20 }}
      />
      <CardPoints month="december" points="10,000 pts" />
    </SafeLayout>
  )
}

const styles = StyleSheet.create({
  titlesContainer: {
    display: 'flex',
    marginTop: 27,
  },
})
