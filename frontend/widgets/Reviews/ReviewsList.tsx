import { Review } from "@/entities"

export const ReviewsList = () => {
	return (
		<div className='mt-8.5 flex items-center justify-center gap-2.25'>
			<Review />
			<Review />
		</div>
	)
}
