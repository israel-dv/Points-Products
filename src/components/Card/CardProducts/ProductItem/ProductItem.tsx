import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import { COLORS } from '../../../../utils/constants/productsUI'
import { formatDate } from '../../../../utils/functions/formatDate'
import { ProductsProps } from '../../../../utils/types/products.types'
import { Substrac } from '../../../Icons/Substrac'
import { Typography } from '../../../Typography/Typography'
import { productItemStyles } from './ProductItemStyles'

type ProductItemProps = ProductsProps & {
  handleClick: () => void
}

export const ProductItem = ({
  createdAt,
  image,
  id,
  is_redemption,
  points,
  product,
  handleClick,
}: ProductItemProps): React.ReactElement => {
  const date = formatDate(createdAt)

  return (
    <TouchableOpacity onPress={handleClick} activeOpacity={0.5}>
      <View style={productItemStyles.container}>
        <View style={productItemStyles.leftContainer}>
          <Image style={productItemStyles.image} source={{ uri: image }} />
          <View style={productItemStyles.productDetails}>
            <Typography.Text2 text={product} fontWeight="bold" />
            <Typography.Text3 text={date} />
          </View>
        </View>
        <View style={productItemStyles.productPoints}>
          <Typography.Text1
            text={is_redemption ? '+' : '-'}
            fontWeight="bold"
            style={{ color: is_redemption ? COLORS.greenLmon : 'red' }}
          />
          <Typography.Text1 text={points.toString()} fontWeight="bold" />
          <View style={{ marginLeft: 15 }}>
            <Substrac />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
