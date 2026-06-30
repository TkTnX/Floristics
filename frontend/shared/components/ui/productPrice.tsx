import { cn } from "@/shared/lib"

interface Props {
  discount?: number
  price: number
  className?:string
}

export const ProductPrice = ({ discount, price, className }: Props) => {
  return (
		<div
			className={cn(
				'mt-3.25 flex items-center justify-center gap-3 text-xl', className
			)}
		>
			{discount && (
				<p className='text-bg-black font-semibold line-through opacity-50'>
					{price}
				</p>
			)}
			<p className='text-center font-bold'>
				{discount
					? Math.floor(price - (price * discount) / 100)
					: price}{' '}
				руб
			</p>
		</div>
  )
}
