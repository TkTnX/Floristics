'use client'
import { SELLERS_CATEGORIES, useCategoryStore } from '@/shared'
import { cn } from '@/shared/lib/utils'

export const BestSellerCategories = () => {
	const { category, setCategory } = useCategoryStore()
	return (
		<ul className='mx-auto mt-7.5 flex max-w-100 items-center justify-between gap-4'>
			{SELLERS_CATEGORIES.map((cat, index) => (
				<li key={index}>
					<button
						onClick={() => setCategory(String(index + 1))}
						className={cn(
							'border-bg-gold border-b border-dashed pb-2.5 text-lg opacity-50 transition',
							{
								'border-solid opacity-100':
									category === String(index + 1)
							}
						)}
					>
						{cat}
					</button>
				</li>
			))}
		</ul>
	)
}
