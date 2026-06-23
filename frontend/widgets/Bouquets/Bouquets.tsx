'use client'
import { BouquetsFilters } from '@/features'
import { Breadcrumbs, ErrorMessage, Skeleton, useCategories } from '@/shared'

interface Props {
	categoryId: string
}

export const Bouquets = ({ categoryId }: Props) => {
	const { useCategoryById } = useCategories()
	const { data, isPending, error } = useCategoryById(categoryId)
	console.log(data)
	if (error) return <ErrorMessage message={error} />
	return (
		<div>
			{isPending ? (
				<Skeleton className='mx-auto mt-4 flex h-5 w-50' />
			) : (
				<Breadcrumbs
					className='mt-4'
					items={[
						{ href: '/bouquets', label: 'Букеты' },
						{ label: data?.name }
					]}
				/>
			)}
			{isPending ? (
				<Skeleton className='mx-auto mt-4 flex h-10 w-50' />
			) : (
				<h2 className='mt-4 text-center text-3xl font-medium'>
					{data?.name} ({data?.products.length})
				</h2>
			)}
			<BouquetsFilters />
		</div>
	)
}
