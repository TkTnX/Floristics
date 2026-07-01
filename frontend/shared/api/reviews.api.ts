import { axiosInstance } from '@/shared/lib'
import { QueryType } from '@/shared/types'

export const getReviews = async (query?: QueryType) => {
	const { data } = await axiosInstance.get('reviews', { params: query })

	return data
}

export const getReviewsByProductId = async (id: string) => {
	const { data } = await axiosInstance.get(`reviews/${id}`)
	return data
}