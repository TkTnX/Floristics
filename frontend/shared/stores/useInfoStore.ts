import { create } from 'zustand'

interface InfoStore {
	currency: string
	city: string
	setCurrency: (currency: string) => void
	setCity: (city: string) => void
}

export const useInfoStore = create<InfoStore>(set => ({
	currency: 'RUB',
	city: 'Москва',
	setCurrency: (currency: string) => set({ currency }),
	setCity: (city: string) => set({ city })
}))
