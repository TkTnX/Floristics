import { useQueryFilters } from '@/shared'
import { X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

export const SelectedFilters = () => {
	const { removeQuery } = useQueryFilters()
	const searchParams = useSearchParams()
	const paramsValues = Object.values(
		Object.fromEntries(
			searchParams
				.entries()
				.filter(([key]) => key !== 'min' && key !== 'max')
		)
	)
	const splittedValues = paramsValues
		.map(i => i.split(','))
		.flat()
		.map(i => i.split('-'))
	const items = splittedValues.filter(item => item[1] !== '')

	if (items.length === 0) return null
	return (
		<div className='flex items-center gap-2.5'>
			<p>Вы выбрали: </p>
			{items.map((item, index) => (
				<button
					onClick={() =>
						removeQuery(item[2], `${item[0]}-${item[1]}-${item[2]}`)
					}
					key={index}
					className='flex items-center gap-1.75 rounded-[30px] bg-[#e4d9d2] py-1.75 pr-2 pl-5 text-sm'
				>
					{item[1]} <X size={16} />
				</button>
			))}
		</div>
	)
}
