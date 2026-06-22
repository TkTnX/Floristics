'use client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger
} from '@/shared'
import { ChevronDown, Phone } from 'lucide-react'

export const PhoneDropdown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className='hidden items-start gap-2.5 lg:flex'>
					<Phone size={20} />
					<div className='text-left'>
						<p className='flex items-center'>
							+7(900)000-00-00 <ChevronDown size={14} />
						</p>
						<p className='text-bg-gold text-[13px]'>
							Обратный звонок
						</p>
					</div>
				</button>
			</DropdownMenuTrigger>
            <DropdownMenuContent className='px-20 py-13 w-full'>
                <h6 className='text-lg font-semibold'>Звоните нам или пишите в мессенджер</h6>
                <p className='mt-2 text-xs font-light'>Без выходных с 8:00 до 22:00</p>
                <div className='w-full h-px bg-bg-gold mt-4.5' />
                <p className='mt-3.75 text-bg-gold text-[10px] uppercase tracking-[0.03em]'>СНГ</p>
                <p className='mt-1.75 text-sm'>+7(900)000-00-00</p>
            </DropdownMenuContent>
		</DropdownMenu>
	)
}
