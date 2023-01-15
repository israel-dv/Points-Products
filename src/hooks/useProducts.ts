import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query'

import { getProducts } from '../api/productsApi'
import { ProductsProps } from '../types/products.types'

const QUERY_KEY = 'products'

export const useProducts = (
  options?: UseQueryOptions<unknown, Error, ProductsProps[]>
): UseQueryResult<ProductsProps[], Error> => {
  return useQuery({ queryFn: getProducts, queryKey: [QUERY_KEY], ...options })
}
