'use client'
import { Product } from '@/entities'
import { cn, ErrorMessage, Skeleton, useProducts } from '@/shared'

interface Props {
	className?: string
}

export const ProductsList = ({ className }: Props) => {
	const { useProductsQuery } = useProducts()
	const { data, isPending, error } = useProductsQuery()

	if (error) return <ErrorMessage message={error} />
	return (
		<div className={cn('grid grid-cols-4 gap-x-5 gap-y-2.5', className)}>
			{isPending
				? [...new Array(5)].map((_, index) => (
						<div key={index}>
							<Skeleton className='h-55 w-full' />
						</div>
					))
				: data.map(product => (
						<Product key={product.id} product={product} />
					))}
		</div>
	)
}
