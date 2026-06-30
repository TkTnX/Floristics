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
		<div className='flex items-center gap-5'>
			<div className='relative flex flex-col gap-2.5'>
				{images.map((image, index) => (
					<Image
						onMouseEnter={() => setImage(index)}
						src={image}
						key={index}
						width={133}
						height={142}
						alt={`Фото-${index}`}
					/>
                ))}
				<Discount
					className='-right-15 left-auto h-15! w-15! text-sm'
					discount={discount}
				/>
			</div>
			<div className='relative ml-18.75 h-116.5 w-96 pt-24 pr-24 pb-16'>
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
