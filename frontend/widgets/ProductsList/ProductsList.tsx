'use client'
import { Product, SmallProduct } from '@/entities'
import { cn, ErrorMessage, Skeleton, useProducts } from '@/shared'
import { useEffect } from 'react'

interface Props {
	className?: string
	isSearch?: boolean
	name?: string | null
	setProductsCount?: (count: number) => void
}

export const ProductsList = ({
	className,
	setProductsCount,
	isSearch,
	name
}: Props) => {
	const { useProductsQuery } = useProducts()
	const { data, isPending, error } = useProductsQuery({
		where: JSON.stringify({ title: { contains: name || undefined } })
	})

	useEffect(() => {
		setProductsCount?.(data?.products.length || 0)
	}, [data, setProductsCount])

	if (error) return <ErrorMessage message={error} />

	return (
		<div
			className={cn(
				'grid h-full flex-1 grid-cols-2 gap-x-5 gap-y-2.5 md:grid-cols-4',
				className
			)}
		>
			{isPending ? (
				[...new Array(5)].map((_, index) => (
					<div key={index}>
						<Skeleton className='h-55 w-full' />
					</div>
				))
			) : data.products.length > 0 ? (
				data.products
					.slice(0, 8)
					.map(product =>
						isSearch ? (
							<SmallProduct key={product.id} product={product} />
						) : (
							<Product key={product.id} product={product} />
						)
					)
			) : (
				<p className='text-bg-gold text-xs'>Товары не найдены</p>
			)}
		</div>
	)
}
