import { PriceFilter } from './PriceFilter'
import { FlowerFilter } from './FlowerFilter'
import { ColorFilter } from './ColorFilter'
import { EventFilter } from './EventFilter'
import { BouquetsSort } from './BouquetsSort'

interface Props {
	setSortBy: React.Dispatch<React.SetStateAction<null | string>>
	price: number[]
}

export const BouquetsFilters = ({ setSortBy, price }: Props) => {
	return (
		<div className='container mt-6.5 flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<FlowerFilter />
				<PriceFilter
					min={price[0]}
					max={price[1]}
				/>
				<ColorFilter />
				<EventFilter />
			</div>
			<BouquetsSort setSortBy={setSortBy} />
		</div>
	)
}
