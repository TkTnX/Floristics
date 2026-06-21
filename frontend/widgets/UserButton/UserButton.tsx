'use client'
import { AuthForm } from '@/features'
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/shared'
import { UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const UserButton = () => {
	const [isLogin, setIsLogin] = useState(true)
	// TODO: TEMP
	const isUser = false
	return isUser ? (
		<Link
			className='hidden items-center gap-2 text-sm font-light lg:flex'
			href={'/profile'}
		>
			<UserIcon strokeWidth={1} />
			Личный кабинет
		</Link>
	) : (
		<Drawer direction='right'>
			<DrawerTrigger asChild>
				<button className='hidden items-center gap-2 text-sm font-light lg:flex'>
					<UserIcon strokeWidth={1} />
					Личный кабинет
				</button>
			</DrawerTrigger>
			<DrawerContent className='flex w-142.25! max-w-142.25! flex-col items-center justify-center px-28.5 py-12.5 bg-bg-light'>
				<DrawerTitle className='text-[26px]'>
					{isLogin ? 'Вход в личный кабинет' : 'Регистрация'}
				</DrawerTitle>
				<AuthForm isLogin={isLogin} />

				<div className='border-bg-gold flex w-full flex-col items-center gap-2.25 border-t pt-7.75 realtive z-2'>
					<p className='text-sm'>
						{isLogin ? 'Ещё нет аккаунта?' : 'Уже есть аккаунт?'}
					</p>
					<button
						onClick={() => setIsLogin(!isLogin)}
						className='text-bg-gold text-xs tracking-[0.03em] uppercase'
					>
						{isLogin ? 'Зарегистрироваться' : 'Войти'}
					</button>
					</div>
					<Image src={'/images/decorations/drawer-flower-l.svg'} width={256} height={409} alt="flower" className='rotate-y-180 absolute bottom-0 right-20' />
			</DrawerContent>
		</Drawer>
	)
}
