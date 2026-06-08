import Image from 'next/image'

export const Review = () => {
	return (
		<div className='bg-white pt-13 pr-5 pb-20 pl-10 sm:pr-16'>
			<Image
				src={'/images/icons/quote.svg'}
				width={51}
				height={32}
				alt='Quote'
				className=''
			/>
			<div className='sm:pl-18.75'>
				<p className='leading-[150%] font-light'>
					Благодарю за быстрое и качественное оформление и доставку
					цветов, лилии превосходны!
				</p>
				<h6 className='mt-3.75 text-lg font-bold'>Анжела Романченко</h6>
			</div>
		</div>
	)
}
