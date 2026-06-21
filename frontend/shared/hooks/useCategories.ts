import { getCategories } from '@/shared/api'
import { ICategory, QueryType } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'

export function useCategories() {
	const useCategoriesQuery = (name?: QueryType) =>
		useQuery({
			queryKey: ['categories', name],
			queryFn: (): Promise<ICategory[]> => getCategories(name)
		})

	return {
		useCategoriesQuery
	}
}
