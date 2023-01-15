import { ProductsProps } from '../utils/types/products.types'
import { apiClient } from './client'

export const getProducts = async (): Promise<ProductsProps[]> => {
  const response = await apiClient.get('/products')
  return response.data
}
