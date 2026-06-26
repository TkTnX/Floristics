import { IColor, IEvent, IFlower } from '@/shared/types'
import { create } from 'zustand'

interface FiltersStore {
	flowers: IFlower[]
	price: [number, number] | null
	colors: IColor[]
	events: IEvent[]

	setFlowers: (flowers: IFlower[]) => void
	setPrice: (price: [number, number]) => void
	setColors: (colors: IColor[]) => void
	setEvents: (events: IEvent[]) => void
}

export const useFiltersStore = create<FiltersStore>(set => ({
	flowers: [],
	price: null,
	colors: [],
	events: [],

	setFlowers: (flowers: IFlower[]) => set({ flowers }),
	setPrice: (price: [number, number]) => set({ price }),
	setColors: (colors: IColor[]) => set({ colors }),
	setEvents: (events: IEvent[]) => set({ events })
}))
