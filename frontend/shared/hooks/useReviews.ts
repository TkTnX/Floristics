import { getReviews } from '@/shared/api'
import { IReview, QueryType } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'

export function useReviews() {
	const useReviewsQuery = (query?: QueryType) =>
		useQuery({
			queryKey: ['products', query],
			queryFn: (): Promise<IReview[]> => getReviews(query)
		})

	return {
		useReviewsQuery
	}
}
