import { ErrorMessage, Skeleton, useCategories } from '@/shared'
import Link from 'next/link'

interface Props {
	name: string | null
}

export const CategoriesSearch = ({ name }: Props) => {
	const { useCategoriesQuery } = useCategories()
	const { data, isPending, error } = useCategoriesQuery({
		where: JSON.stringify({ name: { contains: name || undefined } })
	})

	if (error) return <ErrorMessage message={error} />
	return (
		<ul className='mt-6.25 flex flex-wrap gap-5 sm:flex-col'>
			{isPending ? (
				[...new Array(5)].map((_, index) => (
					<li key={index}>
						<Skeleton className='h-6 w-46.25' />
					</li>
				))
			) : data.length > 0 ? (
				data.map(category => (
					<li key={category.id}>
						<Link
							className='hover:text-bg-gold transition'
							href={`/categories/${category.id}`}
						>
							{category.name} ({category._count.products})
						</Link>
					</li>
				))
			) : (
				<p className='text-bg-gold text-xs'>Категории не найдены</p>
			)}
		</ul>
	)
}
