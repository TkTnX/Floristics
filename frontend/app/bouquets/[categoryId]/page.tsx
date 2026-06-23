import { Bouquets } from "@/widgets"

const CategoryPage = async ({
	params
}: {
	params: Promise<{ categoryId: string }>
    }) => {
    const { categoryId } = await params
    
    
	return (
		<section>
			<Bouquets categoryId={categoryId} />
		</section>
	)
}

export default CategoryPage