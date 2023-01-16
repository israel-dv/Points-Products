import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'

import { ProductDetailsNavigatorProp } from '../../../utils/types/navigators.types'
import { ProductsProps } from '../../../utils/types/products.types'
import { cardProductsStyles } from './CardProductsStyles'
import { ProductItem } from './ProductItem'

type CardProductsProps = {
  products?: ProductsProps[]
}

export const CardProducts = ({
  products,
}: CardProductsProps): React.ReactElement => {
  const { navigate } = useNavigation<ProductDetailsNavigatorProp>()
  const handleProduct = (product: ProductsProps) => {
    navigate('ProductDetails', { ...product })
  }

  return (
    <View style={cardProductsStyles.container}>
      <ScrollView style={{ backgroundColor: 'white' }}>
        {products?.map((product) => (
          <ProductItem
            key={product.id}
            createdAt={product.createdAt}
            id={product.id}
            image={product.image}
            points={product.points}
            is_redemption={product.is_redemption}
            product={product.product}
            handleClick={() => handleProduct(product)}
          />
        ))}
      </ScrollView>
    </View>
  )
}
