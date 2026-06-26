'use client'
import { useRouter, useSearchParams } from 'next/navigation'

export function useQueryFilters() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams.toString())

	const setQuery = (name: string, id: string) => {
		params.set(name, [...params.getAll(name), id].join(','))

		return router.push(`?${params.toString()}`)
	}

	const removeQuery = (name: string, id: string) => {
		const all = params.getAll(name)[0].split(',')
		const filtered = all.filter(item => item !== id).join(',')
		console.log(filtered)
		params.set(name, filtered)

		if (filtered.length === 0) {
			params.delete(name)
		}

		return router.push(`?${params.toString()}`)
	}

	return {
		setQuery,
		removeQuery
	}
}
