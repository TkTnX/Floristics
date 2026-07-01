import { BigCombo, BigProduct } from '@/entities'
import { Breadcrumbs, getProductById } from '@/shared'
import { EProductType, ProductTypeNames } from '@/shared/types'
import { ProductReviews } from '@/widgets'

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
						href: `/${product.type.toLowerCase()}s`,
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
			<BigCombo combo={product.combo[0]} />
			<ProductReviews rating={product.rating} id={product.id} />
		</section>
	)
}

export default ProductPage
