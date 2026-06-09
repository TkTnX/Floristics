import { cn } from '@/shared/lib/utils'
import Image from 'next/image'

interface Props {
	className?: string
}

export const Post = ({ className}: Props) => {
	return (
		<div className={cn('text-center', className)}>
			<div className='relative h-46.5 w-full'>
				<Image
					src={'/images/posts/01.jpg'}
					alt='Post'
					className='object-cover'
					fill
				/>
			</div>
			<h5 className='mt-6.75 text-xl font-bold'>Уход за суккулентами</h5>
			<p className='mt-2.75 text-sm leading-[150%] font-light'>
				Суккуленты в последнее время стали чрезвычайно популярными, на
				подоконниках можно все чаще можно увидеть экзотические растения.
			</p>
		</div>
	)
}
