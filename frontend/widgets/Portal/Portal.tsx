import { Post } from '@/entities'
import { Button } from '@/shared'

export const Portal = () => {
	return (
		<section className='relative mx-auto mt-25.75 max-w-322.5 px-3.75'>
			<h2 className='text-center text-3xl font-semibold'>
				Портал Dicentra
			</h2>
			<div className='mt-8.5 flex items-center'>
				<Post />
				<Post />
				<Post />
			</div>
			<Button className='mx-auto mt-10 flex w-fit justify-center'>
				Смотреть все
			</Button>
		</section>
	)
}
