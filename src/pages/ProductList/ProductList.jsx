import Compare from '../../components/Layout/Compare/Compare'
import ProductCategory from './components/ProductCategory/ProductCategory'
import ProductsSection from './components/ProductsSection/ProductsSection'
import { useCallback, useEffect, useState } from 'react'
import { getProducts } from '@/services/product.api'

const ProductList = () => {
	const [products, setProducts] = useState([])
	const [pagination, setPagination] = useState({})
	const [isLoading, setIsLoading] = useState(false)

	const getProductsApi = useCallback(async (page = 1) => {
		setIsLoading(true)
		try {
			const result = await getProducts(page)
			if (result.success) {
				setProducts(result.products)
				setPagination(result.pagination)
			} else {
				console.error(result.error)
			}
		} catch (error) {
			console.error('Fetch error:', error)
		} finally {
			setIsLoading(false)
		}
	}, [])

	useEffect(() => {
		getProductsApi()
	}, [getProductsApi])

	return (
		<main>
			{/*商品list*/}
			<section className="container py-8 py-lg-9">
				<div className="row">
					<ProductCategory />
					<ProductsSection
						products={products}
						pagination={pagination}
						changePage={getProductsApi}
						isLoading={isLoading}
					/>
				</div>
			</section>

			<Compare nonCompare={false} showCompareArea={true} />
		</main>
	)
}

export default ProductList
