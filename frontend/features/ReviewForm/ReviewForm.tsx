import {
	Button,
	cn,
	Field,
	FieldGroup,
	Input,
	IReviewSchema,
	reviewSchema,
	Textarea
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { UploadIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Rose from '../../public/images/icons/customRose.svg'
export const ReviewForm = () => {
	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<IReviewSchema>({
		resolver: zodResolver(reviewSchema),
		defaultValues: {
			rating: 0,
			fio: '',
			images: [],
			text: ''
		}
	})

	const onSubmit = (values: IReviewSchema) => {
		console.log(values)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='mt-6.25 w-full'>
			<FieldGroup>
				<Controller
					control={control}
					name='rating'
					render={({ field }) => (
						<Field>
							<div className='flex items-center justify-center gap-2'>
								<p className='text-sm'>Ваша оценка</p>
								<div className='flex items-center gap-2.5'>
									{[...Array(5)].map((_, i) => (
										<button
											type='button'
											onMouseLeave={() => setHover(0)}
											onMouseEnter={() => setHover(i + 1)}
											onClick={() => {
												setRating(i + 1)
												field.onChange(i + 1)
											}}
											key={i}
										>
											<Rose
												className={cn(
													'text-text-br-grey hover:text-bg-sale transition',
													{
														'text-bg-sale':
															i + 1 <= rating ||
															i + 1 <= hover
													}
												)}
											/>
										</button>
									))}
								</div>
							</div>
							<Input hidden {...field} defaultValue={rating} />
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='fio'
					render={({ field }) => (
						<Field>
							<Input placeholder='Ваше имя' {...field} />
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='text'
					render={({ field }) => (
						<Field>
							<Textarea
								className='rounded-4xl'
								placeholder='Текст отзыва'
								{...field}
							/>
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='images'
					render={({ field }) => (
						<Field>
							<label className='bg-bg-gold flex cursor-pointer items-center justify-center gap-2.5 rounded-full py-2.5 text-white'>
								<input
									type='file'
									{...field}
									hidden
									accept='image/png, image/jpeg'
									multiple
								/>
								<UploadIcon />
								Загрузить фото
							</label>
							<p className='text-center'>
								Файлы (PNG, JPEG, не более 3х)
							</p>
						</Field>
					)}
				/>
			</FieldGroup>
			<Button className='relative z-2 mt-7.5 w-full'>Отправить</Button>
			<Image
				className={
					'absolute right-0 -bottom-30 -z-1 rotate-y-180 opacity-50'
				}
				src={'/images/decorations/drawer-flower-l.svg'}
				alt='Цветок'
				width={331}
				height={528}
			/>
		</form>
	)
}
