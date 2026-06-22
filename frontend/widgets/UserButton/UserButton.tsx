'use client'
import { AuthForm } from '@/features'
import { cn, Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/shared'
import { UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
	className?:string
}

export const UserButton = ({className}: Props) => {
	const [isLogin, setIsLogin] = useState(true)
	// TODO: TEMP
	const isUser = false
	return isUser ? (
		<Link
			className={cn(
				'hidden items-center gap-2 text-sm font-light lg:flex',
				className
			)}
			href={'/profile'}
		>
			<UserIcon strokeWidth={1} />
			Личный кабинет
		</Link>
	) : (
		<Drawer direction='right'>
			<DrawerTrigger asChild>
				<button
					className={cn(
						'hidden items-center gap-2 text-sm font-light lg:flex'
					, className)}
				>
					<UserIcon strokeWidth={1} />
					Личный кабинет
				</button>
			</DrawerTrigger>
			<DrawerContent className='bg-bg-light flex w-full! max-w-full! flex-col items-center justify-center px-5 py-15 sm:w-142.25! sm:max-w-142.25! sm:px-28.5 sm:py-12.5'>
				<DrawerTitle className='text-[26px]'>
					{isLogin ? 'Вход в личный кабинет' : 'Регистрация'}
				</DrawerTitle>
				<AuthForm isLogin={isLogin} />

				<div className='border-bg-gold realtive z-2 flex w-full flex-col items-center gap-2.25 border-t pt-7.75'>
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
				<Image
					src={'/images/decorations/drawer-flower-l.svg'}
					width={256}
					height={409}
					alt='flower'
					className='absolute right-20 bottom-0 rotate-y-180'
				/>
			</DrawerContent>
		</Drawer>
	)
}
