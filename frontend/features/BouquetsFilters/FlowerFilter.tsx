'use client'
import {
	cn,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	ErrorMessage,
	FilterButton,
	Skeleton,
	useFiltersStore,
	useFlowers,
	useQueryFilters
} from '@/shared'
import { IFlower } from '@/shared/types'
import { Check } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

export const FlowerFilter = () => {
	const { setQuery, removeQuery } = useQueryFilters()
	const searchParams = useSearchParams()
	const { useFlowersQuery } = useFlowers()
	const { data, isPending, error } = useFlowersQuery()
	const { setFlowers, flowers } = useFiltersStore()
	const flowersIds = searchParams.get('flowers')?.split(',') || []
	const isSelected = (id: string) =>
		flowersIds.find(flowerId => flowerId === id)
	const length = searchParams.get('flowers')?.split(',')?.length

	const onClick = (flower: IFlower) => {
		if (isSelected(flower.id)) {
			setFlowers(flowers.filter(f => f.id !== flower.id))
			removeQuery('flowers', flower.id)
		} else {
			setFlowers([...flowers, flower])
			setQuery('flowers', flower.id)
		}
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton className='text-nowrap' name={`Цветок ${length ? `(${length})` : ''}`} />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{error ? (
					<ErrorMessage message={error} />
				) : isPending ? (
					[...new Array(5)].map((_, index) => (
						<DropdownMenuItem key={index}>
							<Skeleton className='h-6 w-46.25' />
						</DropdownMenuItem>
					))
				) : (
					data.map(flower => (
						<DropdownMenuItem
							onClick={() => onClick(flower)}
							className={cn(
								'flex cursor-pointer items-center justify-between text-sm font-light',
								isSelected(flower.id) && 'text-bg-gold'
							)}
							key={flower.id}
						>
							{flower.name}
							{isSelected(flower.id) && (
								<Check
									className='text-bg-gold'
									strokeWidth={3}
								/>
							)}
						</DropdownMenuItem>
					))
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
