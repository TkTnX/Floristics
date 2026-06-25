'use client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	ErrorMessage,
	FilterButton,
	Skeleton,
	useFlowers
} from '@/shared'

export const FlowerFilter = () => {
	const { useFlowersQuery } = useFlowers()
	const { data, isPending, error } = useFlowersQuery()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<FilterButton name='Цветок' />
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
							className='cursor-pointer text-sm font-light'
							key={flower.id}
						>
							{flower.name}
						</DropdownMenuItem>
					))
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
