import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

import { CardPoints } from '../../components/Card/CardPoints'
import { CardProducts } from '../../components/Card/CardProducts'
import { RoundedButton } from '../../components/RoundedButton'
import { SafeLayout } from '../../components/SafeLayout'
import { Typography } from '../../components/Typography/Typography'
import { useProducts } from '../../hooks/useProducts'
import { EVERYTHING, REDEEM, WON } from '../../utils/constants/buttons'
import {
  MONTH,
  MOVEMENTS,
  NAME,
  POINTS,
  WELCOME_BACK,
} from '../../utils/constants/messages'
import { ProductsProps } from '../../utils/types/products.types'
import { homeStyles } from './HomeStyles'

export const Home = () => {
  const { data: products, isLoading, isError } = useProducts()

  const [listProducts, setListProducts] = useState<ProductsProps[]>([])
  const [isShowAllProducts, setisShowAllProducts] = useState<boolean>(true)
  const [points, setPoints] = useState<number>(0)

  useEffect(() => {
    if (products) {
      setListProducts(products)
      const totalPoints = products
        .filter((product) => !product.is_redemption)
        .map((prouct) => prouct.points)
        .reduce((acumulator, actualValue) => acumulator + actualValue)

      setPoints(totalPoints)
    }
  }, [products])

  const handleRedeemProducts = () => {
    setisShowAllProducts(false)
    setListProducts(listProducts.filter((product) => !product.is_redemption))
  }

  const handleWonProducts = () => {
    setisShowAllProducts(false)
    setListProducts(listProducts.filter((product) => product.is_redemption))
  }

  const handleAllProducts = () => {
    setisShowAllProducts(true)
    setListProducts(products ?? [])
  }

  if (isLoading) {
    return <View />
  }

  return (
    <SafeLayout>
      <ScrollView>
        <View style={homeStyles.titlesContainer}>
          <Typography.Heading3 text={WELCOME_BACK} />
          <Typography.Text1 text={NAME} />
        </View>
        <Typography.Text2
          text={POINTS}
          fontWeight="bold"
          style={homeStyles.text2}
        />
        <CardPoints
          month={MONTH}
          points={`${points.toLocaleString('en-EN')} pts`}
        />
        <Typography.Text2
          text={MOVEMENTS}
          fontWeight="bold"
          style={homeStyles.text2}
        />
        <CardProducts products={listProducts} />
        {isShowAllProducts ? (
          <View style={homeStyles.buttonsContainer}>
            <RoundedButton handleClcik={handleWonProducts} text={WON} />
            <RoundedButton
              handleClcik={handleRedeemProducts}
              text={REDEEM}
              style={{ marginLeft: 10 }}
            />
          </View>
        ) : (
          <View style={homeStyles.buttonsContainer}>
            <RoundedButton handleClcik={handleAllProducts} text={EVERYTHING} />
          </View>
        )}
      </ScrollView>
    </SafeLayout>
  )
}