import { create } from 'zustand'

interface CategoryStore {
	category: string
	setCategory: (category: string) => void
}

export const useCategoryStore = create<CategoryStore>(set => ({
	category: "1",
	setCategory: (category: string) => set({ category })
}))
