import { PriceFilter } from './PriceFilter'
import { FlowerFilter } from './FlowerFilter'
import { ColorFilter } from './ColorFilter'
import { EventFilter } from './EventFilter'
import { BouquetsSort } from './BouquetsSort'

export const BouquetsFilters = () => {
	return (
		<div className='container mt-6.5 flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<FlowerFilter />
				<PriceFilter />
				<ColorFilter />
				<EventFilter />
			</div>
			<BouquetsSort />
		</div>
	)
}
