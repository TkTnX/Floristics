import { IReview } from '@/shared/types'
import Image from 'next/image'

interface Props {
	review: IReview
}

export const Review = ({ review }: Props) => {
	return (
		<div className='bg-white pt-13 pr-5 pb-20 pl-10 sm:pr-16'>
			<Image
				src={'/images/icons/quote.svg'}
				width={51}
				height={32}
				alt='Quote'
			/>
			<div className='sm:pl-18.75'>
				<p className='leading-[150%] font-light'>{review.text}</p>
				<h6 className='mt-3.75 text-lg font-bold'>
					{review.user.fio.split(' ').slice(0, 2).join(' ')}
				</h6>
			</div>
		</div>
	)
}
