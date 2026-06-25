import { Product } from '@/entities'
import { cn, ErrorMessage, Skeleton, useProducts } from '@/shared'
import { useEffect } from 'react'

interface Props {
    className?: string
    page: number,
    setTotalPages: React.Dispatch<React.SetStateAction<number>>
}

export const BouquetsList = ({ className, page, setTotalPages }: Props) => {
	const { useProductsQuery } = useProducts()
    const { data, isPending, error } = useProductsQuery({ take: 12 })
    
    useEffect(() => {
        setTotalPages(data?.totalPages || 1)
    }, [data, setTotalPages])
    if (error) return <ErrorMessage message={error} />
    

	return (
		<div className={cn('grid grid-cols-4 gap-2.5', className)}>
			{isPending
				? [...new Array(8)].map((_, index) => (
						<Skeleton className='h-125 w-77' key={index} />
					))
				: data.products.map(product => (
						<Product
							className='-mt-20 hover:z-2'
							product={product}
							key={product.id}
						/>
					))}
		</div>
	)
}
