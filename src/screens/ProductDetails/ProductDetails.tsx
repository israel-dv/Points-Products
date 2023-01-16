import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image, ScrollView, View } from 'react-native'

import { RoundedButton } from '../../components/RoundedButton'
import { Typography } from '../../components/Typography/Typography'
import { formatDate } from '../../utils/functions/formatDate'
import { StackParamList } from '../../utils/types/navigators.types'
import { detailsStyles } from './ProductDetailsScreen'

type ProductDetailsProps = NativeStackScreenProps<
  StackParamList,
  'ProductDetails'
>

export const ProductDetails = ({ route, navigation }: ProductDetailsProps) => {
  const { goBack } = navigation
  const { createdAt, image, product, points } = route.params
  const date = formatDate(createdAt)

  return (
    <ScrollView>
      <View style={detailsStyles.header}>
        <View style={detailsStyles.titleContainer}>
          <Typography.Heading3 text={product} />
        </View>
      </View>
      <View style={detailsStyles.container}>
        <View
          style={[
            detailsStyles.cardImageContainer,
            detailsStyles.cardImageShadow,
          ]}
        >
          <Image style={detailsStyles.cardImage} source={{ uri: image }} />
        </View>
        <Typography.Text2
          text="Detalles del producto:"
          fontWeight="bold"
          style={detailsStyles.detailsText}
        />
        <Typography.Text1
          text={`Comprado el ${date}`}
          fontWeight="bold"
          style={detailsStyles.dateText}
        />
        <Typography.Text2
          text="Con esta compra acumulaste:"
          fontWeight="bold"
          style={detailsStyles.acumulateText}
        />
        <Typography.Heading3 text={`${points.toLocaleString('en-EN')} pts`} />
        <RoundedButton
          text="Aceptar"
          handleClcik={goBack}
          style={detailsStyles.button}
        />
      </View>
    </ScrollView>
  )
}
