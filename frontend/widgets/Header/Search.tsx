'use client'
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/shared'
import { ProductsList } from '@/widgets'
import { SearchIcon } from 'lucide-react'

export const Search = () => {
	return (
		<Drawer direction={'top'}>
			<DrawerTrigger asChild>
				<button className='flex items-center gap-1.5'>
					<SearchIcon strokeWidth={1} />
					<div className='hidden max-w-20 text-sm font-light outline-none md:block lg:max-w-full'>
						Поиск
					</div>
				</button>
			</DrawerTrigger>
			<DrawerContent className='h-screen'>
				<div className='container'>
					<DrawerHeader>
						<form className='border-bg-gold flex items-center justify-between border-b'>
							<input
								className='w-full px-8.75 py-4.5 text-lg focus-visible:outline-none'
								type='text'
								placeholder='Поиск'
							/>
							<SearchIcon size={20} />
						</form>
					</DrawerHeader>
					<div>
						<div className='overflow-y-auto'>
							<ProductsList />
						</div>
					</div>
				</div>
				<DrawerTitle />
			</DrawerContent>
		</Drawer>
	)
}
