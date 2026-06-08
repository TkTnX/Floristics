import Image from 'next/image'

export const Post = () => {
	return (
		<div className='text-center'>
			<div className='relative h-46.5 w-full'>
				<Image
					src={'/images/posts/01.jpg'}
					alt='Post'
					className='object-cover'
					fill
				/>
			</div>
			<h5 className='mt-6.75 text-xl font-bold'>Уход за суккулентами</h5>
			<p className='mt-2.75 font-light leading-[150%] text-sm'>
				Суккуленты в последнее время стали чрезвычайно популярными, на
				подоконниках можно все чаще можно увидеть экзотические растения.
			</p>
		</div>
	)
}
