import { PriceFilter } from './PriceFilter'
import { FlowerFilter } from './FlowerFilter'
import { ColorFilter } from './ColorFilter'
import { SizeFilter } from './SizeFilter'
import { EventFilter } from './EventFilter'

export const BouquetsFilters = () => {
	return (
		<div className='container flex items-center gap-2 mt-6.5'>
			<FlowerFilter />
			<PriceFilter />
			<ColorFilter />
			<SizeFilter />
			<EventFilter />
		</div>
	)
}
