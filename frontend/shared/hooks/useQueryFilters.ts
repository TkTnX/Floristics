'use client'
import { useRouter, useSearchParams } from 'next/navigation'

export function useQueryFilters() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams.toString())

	const isSelected = (name: string, id?: string) => {
		const ids = searchParams.get(name)?.split(',') || []

		return {
			isSelected: ids.find(item => item.split('-')[0] === id),
			length: ids.length
		}
	}

	const onSelect = (item: { id: string; name: string }, name: string) => {
		if (isSelected(name, item.id).isSelected) {
			removeQuery(name, `${item.id}-${item.name}-${name}`)
		} else {
			setQuery(name, `${item.id}-${item.name}-${name}`)
		}
	}

	const setQuery = (name: string, id: string) => {
		params.set(name, [...params.getAll(name), id].join(','))

		return router.push(`?${params.toString()}`)
	}

	const removeQuery = (name: string, id: string) => {
		const all = params.getAll(name)[0].split(',')
		const filtered = all.filter(item => item !== id).join(',')
		params.set(name, filtered)

		if (filtered.length === 0) {
			params.delete(name)
		}

		return router.push(`?${params.toString()}`)
	}

	return {
		setQuery,
		removeQuery,
		isSelected,
		onSelect
	}
}
