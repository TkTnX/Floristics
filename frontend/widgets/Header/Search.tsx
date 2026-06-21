'use client'
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/shared'
import { CategoriesSearch, ProductsList } from '@/widgets'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'

export const Search = () => {
	const [productsCount, setProductsCount] = useState(0)
	const [text, setText] = useState<null | string>(null)
	const [value] = useDebounce(text, 1000)
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
			<DrawerContent className='bg-bg-light h-screen! max-h-screen!'>
				<div className='relative z-2 container max-w-209.5! overflow-y-auto md:overflow-hidden'>
					<DrawerHeader>
						<form className='border-bg-gold flex items-center justify-between border-b'>
							<input
								value={text || ''}
								onChange={e => setText(e.target.value)}
								className='w-full px-8.75 py-4.5 text-lg focus-visible:outline-none'
								type='text'
								placeholder='Поиск'
							/>
							<SearchIcon size={20} />
						</form>
					</DrawerHeader>
					<div className='border-bg-gold  flex h-full flex-col-reverse gap-7.5 border-b pb-5 sm:flex-row'>
						<div className='border-bg-gold h-full flex-1 sm:border-r sm:pr-7 '>
							<ProductsList
								setProductsCount={setProductsCount}
								name={value}
								isSearch={true}
							/>
						</div>
						<div>
							<h5>В категориях</h5>
							<CategoriesSearch name={value} />
						</div>
					</div>
					<Link
						href={'/catalog'}
						className='text-bg-gold mt-6 mb-9.5 block w-fit text-sm tracking-[0.03em] uppercase hover:opacity-80'
					>
						Все результаты поиска ({productsCount})
					</Link>
				</div>
				<DrawerTitle />
				<Image
					src={'/images/decorations/drawer-flower-l.svg'}
					alt='flower'
					width={256}
					height={409}
					className='absolute bottom-0 left-0'
				/>
				<Image
					src={'/images/decorations/drawer-flower-r.svg'}
					alt='flower'
					width={256}
					height={409}
					className='absolute right-0 bottom-0'
				/>
			</DrawerContent>
		</Drawer>
	)
}
