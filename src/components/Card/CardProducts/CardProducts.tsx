import React from 'react'
import { FlatList, View } from 'react-native'

import { ProductsProps } from '../../../utils/types/products.types'
import { cardProductsStyles } from './CardProductsStyles'
import { ProductItem } from './ProductItem'

type CardProductsProps = {
  products?: ProductsProps[]
}

export const CardProducts = ({
  products,
}: CardProductsProps): React.ReactElement => {
  const handleProduct = () => {
    console.log('click')
  }

  return (
    <View style={cardProductsStyles.container}>
      <FlatList
        data={products}
        renderItem={({ item: product }) => (
          <ProductItem
            createdAt={product.createdAt}
            id={product.id}
            image={product.image}
            points={product.points}
            is_redemption={product.is_redemption}
            product={product.product}
            handleClick={handleProduct}
          />
        )}
      />
    </View>
  )
}
