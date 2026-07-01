import { getReviews,  getReviewsByProductId } from '@/shared/api'
import { IReview, QueryType } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'

export function useReviews() {
	const useReviewsQuery = (query?: QueryType) =>
		useQuery({
			queryKey: ['reviews', query],
			queryFn: (): Promise<IReview[]> => getReviews(query)
		})
	
	const useGetReviewsByProductIdQuery = (id: string) =>
		useQuery({
			queryKey: ['review', id],
			queryFn: (): Promise<IReview[]> => getReviewsByProductId(id)
		})

	return {
		useReviewsQuery,
		useGetReviewsByProductIdQuery
	}
}
