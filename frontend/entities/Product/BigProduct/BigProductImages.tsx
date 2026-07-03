import { Discount } from '@/shared'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
	images: string[]
	discount?: number
}

export const BigProductImages = ({ images, discount }: Props) => {
	const [image, setImage] = useState(0)

	return (
		<div className='flex flex-col-reverse items-center gap-5 sm:flex-row'>
			<div className='relative flex gap-2.5 sm:flex-col'>
				{images.map((image, index) => (
					<Image
						onMouseEnter={() => setImage(index)}
						src={image}
						key={index}
						width={133}
						height={142}
						className='w-20 sm:w-33.25 '
						alt={`Фото-${index}`}
					/>
				))}
			</div>
			<div className='relative ml-18.75 h-116.5 w-96 pt-24 pr-24 pb-16'>
				<Discount
					className='left-0 h-15! w-15! text-sm sm:-top-10'
					discount={discount}
				/>
				<Image
					fill
					src={images[image]}
					alt={`Фото`}
					className='object-cover'
				/>
			</div>
		</div>
	)
}
