import { axiosInstance } from '@/shared/lib'
import { QueryType } from '@/shared/types'

export const getProducts = async (query?: QueryType) => {
	const { data } = await axiosInstance.get('products', { params: query })

	return data
}
