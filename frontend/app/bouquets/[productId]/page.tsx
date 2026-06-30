import { BigProduct } from '@/entities'
import { Breadcrumbs, getProductById } from '@/shared'
import { EProductType, ProductTypeNames } from '@/shared/types'

const ProductPage = async ({
	params
}: {
	params: Promise<{ productId: string }>
}) => {
	const productId = (await params).productId
	const product = await getProductById(productId)
	return (
		<section>
			<Breadcrumbs
				className='mt-4'
				items={[
					{
						href: product.type,
						label: ProductTypeNames[
							product.type.toLowerCase() as EProductType
						]
					},
					{
						label: product.title
					}
				]}
			/>
			<BigProduct product={product} />
		</section>
	)
}

export default ProductPage
