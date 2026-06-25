'use client'
import { BouquetsFilters } from '@/features'
import {
	Breadcrumbs,
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink
} from '@/shared'
import { BouquetsList } from './BouquetsList'
import { X } from 'lucide-react'
import { useState } from 'react'

export const Bouquets = () => {
	const [totalPages, setTotalPages] = useState(1)
	const [page, setPage] = useState(1)
	// TODO: Сделать пагинацию
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
				<Pagination>
					<PaginationContent>
						{[...new Array(totalPages)].map((_, index) => (
							<PaginationItem key={index}>
								<PaginationLink href='#'>
									{index + 1}
								</PaginationLink>
							</PaginationItem>
						))}
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	)
}
