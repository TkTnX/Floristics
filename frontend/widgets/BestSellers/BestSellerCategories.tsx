'use client'
import { SELLERS_CATEGORIES } from '@/shared'
import { cn } from '@/shared/lib/utils'
import { useState } from 'react'

export const BestSellerCategories = () => {
	const [category, setCategory] = useState(0)
	return (
		<ul className='mx-auto mt-7.5 flex max-w-100 items-center justify-between gap-4'>
			{SELLERS_CATEGORIES.map((cat, index) => (
				<li key={index}>
					<button
						onClick={() => setCategory(index)}
						className={cn(
							'border-bg-gold border-b border-dashed pb-2.5 text-lg opacity-50 transition',
							{ 'border-solid opacity-100': category === index }
						)}
					>
						{cat}
					</button>
				</li>
			))}
		</ul>
	)
}
