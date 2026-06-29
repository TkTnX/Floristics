'use client'
import { BouquetsFilters, SelectedFilters } from '@/features'
import { Breadcrumbs } from '@/shared'
import { BouquetsList } from './BouquetsList'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
export const Bouquets = () => {
	const [price, setPrice] = useState([0, 0])
	const [sortBy, setSortBy] = useState<null | string>(null)
	const [totalPages, setTotalPages] = useState(1)
	const [page, setPage] = useState(1)
	return (
		<div>
			<Breadcrumbs className='mt-4' items={[{ label: 'Букеты' }]} />

			<BouquetsFilters price={price} setSortBy={setSortBy} />
			<div className='container mt-4.25'>
				<SelectedFilters />
				<BouquetsList
					setPrice={setPrice}
					sortBy={sortBy}
					page={page}
					setTotalPages={setTotalPages}
					className='lg:mt-28.75'
				/>
			</div>
			<div className='bg-white'>
				<ReactPaginate
					className='flex items-center justify-center pt-4 pb-9'
					breakLabel='...'
					previousClassName='cursor-pointer mr-25 '
					nextClassName='cursor-pointer ml-25 '
					disabledClassName='cursor-not-allowed opacity-50'
					nextLabel={<ChevronRight />}
					previousLabel={<ChevronLeft />}
					activeLinkClassName='border-bg-gold border'
					onPageChange={({ selected }) => setPage(selected + 1)}
					pageLinkClassName='w-12.5 h-12.5 flex items-center justify-center  rounded-full cursor-pointer'
					pageCount={totalPages}
					pageRangeDisplayed={5}
					renderOnZeroPageCount={null}
				/>
			</div>
		</div>
	)
}
