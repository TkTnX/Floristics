'use client'
import { BouquetsFilters } from '@/features'
import { Breadcrumbs } from '@/shared'
import { BouquetsList } from './BouquetsList'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
export const Bouquets = () => {
	const [totalPages, setTotalPages] = useState(1)
	const [page, setPage] = useState(1)
	// TODO: Сделать фильтрацию и сортировку
	return (
		<div>
			<Breadcrumbs className='mt-4' items={[{ label: 'Букеты' }]} />

			<BouquetsFilters />
			{/* TODO: Вывод того, что выбрано */}
			<div className='container mt-4.25'>
				<div className='flex items-center gap-2.5'>
					<p>Вы выбрали: </p>
					<button className='flex items-center gap-1.75 rounded-[30px] bg-[#e4d9d2] py-1.75 pr-2 pl-5 text-sm'>
						Хризантема <X size={16} />
					</button>
					<button className='flex items-center gap-1.75 rounded-[30px] bg-[#e4d9d2] py-1.75 pr-2 pl-5 text-sm'>
						Эустома <X size={16} />
					</button>
					<button className='flex items-center gap-1.75 rounded-[30px] bg-[#e4d9d2] py-1.75 pr-2 pl-5 text-sm'>
						Красный <X size={16} />
					</button>
					<button className='flex items-center gap-1.75 rounded-[30px] bg-[#e4d9d2] py-1.75 pr-2 pl-5 text-sm'>
						День рождения <X size={16} />
					</button>
				</div>
				<BouquetsList
					page={page}
					setTotalPages={setTotalPages}
					className='mt-28.75'
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
