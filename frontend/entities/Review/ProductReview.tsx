import { IReview } from '@/shared/types'
import Image from 'next/image'

interface Props {
	review: IReview
	rating: number
}

export const ProductReview = ({ review, rating }: Props) => {
	return (
		<div className='pt-9.75 pr-8.5 pb-12 pl-8.5 lg:pl-11.25 lg:flex-1'>
			<div className='flex items-start justify-between'>
				<div>
					<h6 className='text-lg font-bold'>{review.user.fio}</h6>
					<p className='mt-2 text-xs font-light opacity-70'>
						{new Date(review.createdAt).toLocaleDateString(
							'ru-RU',
							{ day: 'numeric', month: 'long', year: 'numeric' }
						)}
					</p>
				</div>
				<div className='flex items-center gap-2.5'>
					<Image
						src={'/images/icons/rose.svg'}
						width={18}
						height={17}
						alt='Роза'
					/>
					<p className='text-2xl font-bold text-nowrap'>
						{rating} /5
					</p>
				</div>
			</div>
			<p className='mt-2 text-sm leading-[181%] font-light'>
				{review.text}
			</p>
			<div className='flex flex-wrap items-center gap-2'>
				{review.images.map((image, index) => (
					<Image
						className='rounded-full'
						key={index}
						src={image}
						width={100}
						height={100}
						alt={image}
					/>
				))}
			</div>
		</div>
	)
}
