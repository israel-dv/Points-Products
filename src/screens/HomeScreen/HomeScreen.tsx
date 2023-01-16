import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

import { CardPoints } from '../../components/Card/CardPoints'
import { CardProducts } from '../../components/Card/CardProducts'
import { LoadingErrorLayout } from '../../components/Layouts/LoadingErrorLayout'
import { SafeLayout } from '../../components/Layouts/SafeLayout'
import { RoundedButton } from '../../components/RoundedButton'
import { Typography } from '../../components/Typography/Typography'
import { useProducts } from '../../hooks/useProducts'
import { EVERYTHING, REDEEM, WON } from '../../utils/constants/buttons'
import {
  ERROR,
  LOADING,
  MONTH,
  MOVEMENTS,
  NAME,
  POINTS,
  WELCOME_BACK,
} from '../../utils/constants/messages'
import { ProductsProps } from '../../utils/types/products.types'
import { homeStyles } from './HomeStyles'

/**
 * Esta es una funcion de muestra de como se se pueden cachar errores
 * cuando hacemos llamadas al API. Con esto evitamos el uso de try - catch
 * en la funcion de peticion -> api/productApi/getProducts y cachamos el error
 * en dentro de nuestro custom hook o podemos pasarlo por parametro
 * @param error
 */
function handleError(error: Error) {
  // ...Aqui van los requisito necesarios cuando suceda el error/
  // Podemos mostrar un mensaje (ej. Alerts), trackear el error en aguna plataforma, etc.
  console.error(error)
}

export const Home = (): React.ReactElement => {
  const {
    data: products,
    isLoading,
    isError,
  } = useProducts({ onError: handleError })

  const [listProducts, setListProducts] = useState<ProductsProps[]>([])
  const [isShowAllProducts, setisShowAllProducts] = useState<boolean>(true)
  const [points, setPoints] = useState<number>(0)

  useEffect(() => {
    if (products) {
      setListProducts(products)
      const totalPoints = products
        .filter((product) => !product.is_redemption)
        .map((product) => product.points)
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
    return <LoadingErrorLayout type="loading" />
  }

  if (isError) {
    return <LoadingErrorLayout type="error" />
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
