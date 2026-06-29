import { PriceFilter } from './PriceFilter'
import { FlowerFilter } from './FlowerFilter'
import { ColorFilter } from './ColorFilter'
import { EventFilter } from './EventFilter'
import { BouquetsSort } from './BouquetsSort'
import {
	Drawer,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger,
	FilterButton
} from '@/shared'
import { Plus } from 'lucide-react'
import { SelectedFilters } from './SelectedFilters'

interface Props {
	setSortBy: React.Dispatch<React.SetStateAction<null | string>>
	price: number[]
}

export const BouquetsFilters = ({ setSortBy, price }: Props) => {
	return (
		<div className='container mt-6.5 flex flex-col items-center justify-between gap-2 sm:flex-row md:flex-wrap'>
			<Drawer direction='left'>
				<DrawerTrigger asChild>
					<FilterButton
						className='flex w-full border-white bg-white md:hidden md:w-45'
						name='Фильтры'
						Icon={<Plus className='text-bg-gold' />}
					/>
				</DrawerTrigger>
				<DrawerContent className='flex w-full flex-col border-t border-[#f0eae7]'>
					<SelectedFilters className='flex-wrap gap-4 px-5 py-6' />
					<DrawerTitle />
					<FlowerFilter className='border-1` rounded-none border-b border-[#f0eae7]' />
					<PriceFilter
						className='border-1` rounded-none border-b border-[#f0eae7]'
						min={price[0]}
						max={price[1]}
					/>
					<ColorFilter className='border-1` rounded-none border-b border-[#f0eae7]' />
					<EventFilter className='border-1` rounded-none border-b border-[#f0eae7]' />
				</DrawerContent>
			</Drawer>
			<div className='hidden w-full items-center gap-2 md:flex lg:w-auto'>
				<FlowerFilter />
				<PriceFilter min={price[0]} max={price[1]} />
				<ColorFilter />
				<EventFilter />
			</div>
			<BouquetsSort setSortBy={setSortBy} />
		</div>
	)
}
