import { getCombos } from '@/shared/api'
import { ICombo, IProduct, QueryType } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'

export function useCombos() {
	const useCombosQuery = (query?: QueryType) =>
		useQuery({
			queryKey: ['combos', query],
			queryFn: (): Promise<ICombo[]> => getCombos(query)
		})

	return {
		useCombosQuery
	}
}
