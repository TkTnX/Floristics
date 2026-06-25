import { getEvents } from '@/shared/api'
import { IEvent } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'

export function useEvents() {
	const useEventsQuery = () =>
		useQuery({
			queryKey: ['events'],
			queryFn: (): Promise<IEvent[]> => getEvents()
		})

	return { useEventsQuery }
}
