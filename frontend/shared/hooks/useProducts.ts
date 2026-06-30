import { getProductById, getProducts } from '@/shared/api'
import { IProduct, QueryType } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'

export function useProducts() {
	const useProductsQuery = (query?: QueryType) =>
		useQuery({
			queryKey: ['products', query],
			queryFn: (): Promise<{
				products: IProduct[]
				totalPages: number
				prices: { _min: { price: number }; _max: { price: number } }
			}> => getProducts(query)
		})
	
	const useGetProductByIdQuery = (id: string) => useQuery({
		queryKey: ['product', id],
		queryFn: (): Promise<IProduct> => getProductById(id)
	})

	return {
		useProductsQuery,
		useGetProductByIdQuery
	}
}
