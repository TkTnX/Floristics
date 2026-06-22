'use client'
import { cn, Tooltip, TooltipContent, TooltipTrigger } from '@/shared'

import { Moon } from 'lucide-react'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
	className?: string
	isMobile?: boolean
}

export const DeliveryTooltip = ({ className, isMobile = false }: Props) => {
	const [open, setOpen] = useState(false)
	return (
		<Tooltip open={open} onOpenChange={setOpen}>
			<TooltipTrigger asChild>
				<button
					onClick={() => setOpen(true)}
					className={cn(
						'bg-button-pressed-bg-dark flex items-center gap-2.5 px-2.75 py-2 text-[13px]',
						className
					)}
				>
					<Moon size={14} className='stroke-bg-gold -mr-1.25' />
					Ночная доставка
					{isMobile ? (
						<p className='text-bg-gold text-xs'>Подробнее</p>
					) : (
						<Image
							src={'/images/icons/info.svg'}
							alt='Ночная доставка'
							width={4}
							height={10}
						/>
					)}
				</button>
			</TooltipTrigger>
			<TooltipContent className='bg-bg-light text-bg-black -mt-2.5! max-w-38.25 py-6.5 pr-3.5 pl-5.5 text-xs font-light'>
				Для доставки в ночной период заказ нужно сделать до 20:00.
			</TooltipContent>
		</Tooltip>
	)
}
