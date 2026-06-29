import { Product } from '@/entities'
import { cn, ErrorMessage, Skeleton, useProducts } from '@/shared'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

interface Props {
	className?: string
	page: number
	setTotalPages: React.Dispatch<React.SetStateAction<number>>
	sortBy: string | null
	setPrice: (price: number[]) => void
}

export const BouquetsList = ({
	className,
	page,
	setTotalPages,
	sortBy,
	setPrice
}: Props) => {
	const searchParams = useSearchParams()
	const { useProductsQuery } = useProducts()
	const { data, isPending, error } = useProductsQuery({
		take: 12,
		page,
		query: JSON.stringify(Object.fromEntries(searchParams.entries())),
		sortBy: sortBy
			? JSON.stringify({ [sortBy.split('-')[0]]: sortBy.split('-')[1] })
			: undefined
	})

	useEffect(() => {
		console.log(data)
		const min = data?.prices._min.price
		const max = data?.prices._max.price
		setPrice([min || 0, max || 0])
	}, [data, setPrice])

	useEffect(() => {
		setTotalPages(data?.totalPages || 1)
	}, [data, setTotalPages])
	if (error) return <ErrorMessage message={error} />

	return (
		<div
			className={cn(
				'grid grid-cols-2 sm:grid-cols-3 sm:gap-2.5 lg:grid-cols-4',
				className
			)}
		>
			{isPending ? (
				[...new Array(8)].map((_, index) => (
					<Skeleton className='h-125 w-77' key={index} />
				))
			) : data.products.length > 0 ? (
				data.products.map(product => (
					<Product
						className='hover:z-2 lg:-mt-20'
						product={product}
						key={product.id}
					/>
				))
			) : (
				<p className='text-bg-gold col-span-4 mb-10 text-center text-xl font-bold'>
					Ничего не нашлось
				</p>
			)}
		</div>
	)
}
