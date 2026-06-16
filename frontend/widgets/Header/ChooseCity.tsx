'use client'
import {
	Button,
	CITIES,
	cn,
	Drawer,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger,
	Input,
	useInfoStore
} from '@/shared'
import { Navigation } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const ChooseCity = () => {
	const [open, setOpen] = useState(false)
	const { setCity, city } = useInfoStore()

	const onClick = (value: string) => {
		localStorage.setItem('city', value)
		setCity(value)
		setOpen(false)
	}

	const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		const value = e.currentTarget.city.value
		if (!value) return

		onClick(e.currentTarget.city.value)
	}

	useEffect(() => {
		if (localStorage.getItem('city')) {
			setCity(localStorage.getItem('city') as string)
		}
	}, [setCity])
	return (
		<Drawer open={open} onOpenChange={setOpen} direction='top'>
			<DrawerTrigger asChild>
				<button className='text-bg-gold flex items-center gap-1.5 text-xs font-semibold'>
					<Navigation size={10} />
					{city}
				</button>
			</DrawerTrigger>
			<DrawerContent className='bg-bg-light flex h-full items-center justify-center'>
				<div className='relative z-2'>
					<DrawerTitle className='text-center text-2xl'>
						Выберите город
					</DrawerTitle>
					<div className='mt-6.5 flex flex-wrap items-center justify-center gap-5'>
						{CITIES.map(c => (
							<Button
								onClick={() => onClick(c)}
								className={cn(
									'border-bg-gold text-bg-black border bg-transparent text-sm font-semibold',
									{ 'bg-bg-gold text-white': c === city }
								)}
								key={c}
							>
								{c}
							</Button>
						))}
					</div>
					<div className='container mt-14 flex w-full items-center gap-8.5'>
						<div className='bg-bg-gold h-px flex-1' />
						<p className='font-light'>или укажите ниже</p>
						<div className='bg-bg-gold h-px flex-1' />
					</div>
					<form
						onSubmit={onSubmit}
						className='mt-9 flex flex-wrap items-center gap-3.25 px-3'
					>
						<Input
							name='city'
							className='h-15 min-w-50 flex-1 rounded-[30px] border-none bg-white p-5 focus-within:stroke-none sm:w-105.75'
							placeholder='Введите ваш город'
						/>
						<Button className='bg-button--disabled-bg-dark h-15 text-white'>
							Это мой город
						</Button>
					</form>
				</div>
				<Image
					src={'/images/decorations/drawer-flower-l.svg'}
					width={256}
					height={409}
					alt='Flower'
					className='absolute bottom-0 left-17 z-0 hidden sm:block'
				/>
				<Image
					src={'/images/decorations/drawer-flower-r.svg'}
					width={174}
					height={298}
					alt='Flower'
					className='absolute right-17 bottom-0 z-0 hidden sm:block'
				/>
			</DrawerContent>
		</Drawer>
	)
}
