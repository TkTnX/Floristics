import { ChevronDown, Phone } from 'lucide-react'
import { HeaderTop } from './HeaderTop'

export const Header = () => {
	return (
		<header>
			<HeaderTop />
			<div className='flex items-start gap-2.5 max-w-250 mx-auto'>
				<Phone size={20} />
				<button className='text-left'>
					<p className='flex items-center'>
						+7(900)000-00-00 <ChevronDown size={14} />
					</p>
					<p className='text-bg-gold text-[13px]'>Обратный звонок</p>
				</button>
			</div>
		</header>
	)
}
