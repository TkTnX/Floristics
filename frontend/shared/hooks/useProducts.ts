import { getProducts } from '@/shared/api'
import { IProduct, QueryType } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'

export function useProducts() {
	const useProductsQuery = (query?: QueryType) =>
		useQuery({
			queryKey: ['products', query],
			queryFn: (): Promise<IProduct[]> => getProducts(query)
		})

	return {
		useProductsQuery
	}
}
