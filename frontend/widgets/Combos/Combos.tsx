import { CombosList } from './CombosList'

export const Combos = () => {
	return (
		<section className='bg-bg-light pt-16 pb-17'>
			<div className='relative mx-auto max-w-322.5 px-3.75'>
				<h2 className='text-center text-3xl font-semibold'>
					Вместе дешевле
				</h2>
				<CombosList/> 
			</div>
		</section>
	)
}
