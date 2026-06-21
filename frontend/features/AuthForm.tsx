'use client'
import {
	Button,
	Field,
	FieldGroup,
	Input,
	loginSchema,
	registerSchema
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
interface Props {
	isLogin: boolean
}

export const AuthForm = ({ isLogin }: Props) => {
	const [showPassword, setShowPassword] = useState(false)
	const type = isLogin ? loginSchema : registerSchema
	const form = useForm({
		resolver: zodResolver(type),
		defaultValues: isLogin
			? {
					password: '',
					phone: ''
				}
			: {
					phone: '',
					password: '',
					email: '',
					fio: ''
				}
	})
	return (
		<form className='relative z-2 mt-7.5 flex w-full flex-1 flex-col gap-2.5'>
			<FieldGroup>
				<Controller
					name='phone'
					control={form.control}
					render={({ field }) => (
						<Field>
							{/* TODO: ADD MASK */}
							<Input placeholder='+7(___)___-__-__' {...field} />
						</Field>
					)}
				/>
				{!isLogin && (
					<Controller
						name='fio'
						control={form.control}
						render={({ field }) => (
							<Field>
								<Input placeholder='Имя' {...field} />
							</Field>
						)}
					/>
				)}
				<Controller
					name='password'
					control={form.control}
					render={({ field }) => (
						<>
							<Field className='relative'>
								<Input
									className='pr-15'
									placeholder='Пароль'
									type={showPassword ? 'text' : 'password'}
									{...field}
								/>
								<button
									onClick={() =>
										setShowPassword(!showPassword)
									}
									type='button'
									className='absolute top-1/2 right-4.75 w-fit! -translate-y-1/2'
								>
									{showPassword ? <EyeOff /> : <Eye />}
								</button>
							</Field>
							{isLogin && (
								<button type="button" className='text-bg-gold text-center hover:opacity-80'>
									Забыли пароль?
								</button>
							)}
						</>
					)}
				/>
				{!isLogin && (
					<Controller
						name='email'
						control={form.control}
						render={({ field }) => (
							<Field>
								<Input
									type='email'
									placeholder='E-mail (необязательно)'
									{...field}
								/>
							</Field>
						)}
					/>
				)}
				<Button>{isLogin ? 'Вход' : 'Регистрация'}</Button>
				<div className='mt-6.75 flex items-center justify-between gap-4'>
					<button className='flex items-center gap-2.5'>
						<div className='border-bg-gold flex h-11.75 w-11.75 items-center justify-center rounded-full border'>
							<Image
								src={'/images/icons/fb-black.svg'}
								width={19}
								height={19}
								alt='Facebook'
							/>
						</div>
						<p className='text-sm'>Facebook</p>
					</button>
					<button className='flex items-center gap-2.5'>
						<div className='border-bg-gold flex h-11.75 w-11.75 items-center justify-center rounded-full border'>
							<Image
								src={'/images/icons/google.svg'}
								width={13}
								height={13}
								alt='Google'
							/>
						</div>
						<p className='text-sm'>Google</p>
					</button>
				</div>
			</FieldGroup>
		</form>
	)
}
