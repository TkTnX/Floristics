'use client'
import { ReviewForm } from '@/features'
import {
	Drawer,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger
} from '@/shared/components/ui/drawer'

interface Props {
	children: React.ReactNode
}

export const AddReviewDrawer = ({ children }: Props) => {
	return (
		<Drawer direction='right'>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className='flex w-142.25! max-w-142.25! px-28.75 flex-col items-center justify-center'>
                <DrawerTitle className='text-2xl'>Оставить отзыв</DrawerTitle>
                <ReviewForm />
			</DrawerContent>
		</Drawer>
	)
}
