import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { ProductsProps } from './products.types'

export type StackParamList = {
  Home: undefined
  ProductDetails: ProductsProps
}

export type ProductDetailsNavigatorProp = NativeStackNavigationProp<
  StackParamList,
  'ProductDetails'
>
