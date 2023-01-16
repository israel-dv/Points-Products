import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import { CardPoints } from '../../components/Card/CardPoints'
import { CardProducts } from '../../components/Card/CardProducts'
import { RoundedButton } from '../../components/RoundedButton'
import { SafeLayout } from '../../components/SafeLayout'
import { Typography } from '../../components/Typography/Typography'
import { useProducts } from '../../hooks/useProducts'
import { EVERYTHING, REDEEM, WON } from '../../utils/constants/buttons'
import {
  MOVEMENTS,
  NAME,
  POINTS,
  WELCOME_BACK,
} from '../../utils/constants/messages'
import { COLORS } from '../../utils/constants/productsUI'
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

  if (isLoading) {
    return <View />
  }

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

  return (
    <SafeLayout>
      <View style={homeStyles.titlesContainer}>
        <Typography.Heading3 text={WELCOME_BACK} />
        <Typography.Text1 text={NAME} />
      </View>
      <Typography.Text2
        text={POINTS}
        fontWeight="bold"
        style={{ color: COLORS.gray100, paddingVertical: 20 }}
      />
      <CardPoints
        month="Diciembre"
        points={`${points.toLocaleString('en-EN')} pts`}
      />
      <Typography.Text2
        text={MOVEMENTS}
        fontWeight="bold"
        style={{ color: COLORS.gray100, paddingVertical: 20 }}
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
    </SafeLayout>
  )
}
