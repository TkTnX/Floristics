import { SalesList } from './SalesList'

export const Sales = () => {
	return (
		<section className='bg-bg-light pt-16'>
			<div className='relative mx-auto max-w-322.5 px-3.75'>
				<h2 className='text-center text-3xl font-semibold'>
					Акционные предложения
				</h2>
				<SalesList />
			</div>
		</section>
	)
}
