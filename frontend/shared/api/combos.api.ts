import { axiosInstance } from '@/shared/lib'
import { QueryType } from '@/shared/types'

export const getCombos = async (query?: QueryType) => {
	const { data } = await axiosInstance.get('combos', { params: query })

	return data
}
