import Compare from '../../components/Layout/Compare/Compare'
import ProductCategory from './components/ProductCategory/ProductCategory'
import ProductsSection from './components/ProductsSection/ProductsSection'
import { useCallback, useEffect, useState } from 'react'
import { getAllProducts, getProducts } from '@/services/product.api'

const ProductList = () => {
	const [products, setProducts] = useState([])
	const [pagination, setPagination] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [filteredProducts, setFilteredProducts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const productsPerPage = 9
	const [keyword, setKeyword] = useState('')

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
		if (!keyword) {
			getProductsApi(currentPage)
		}
	}, [keyword, currentPage, getProductsApi])

	const handleSearch = async () => {
		if (!keyword) return
		setIsLoading(true)
		try {
			//抓全部商品
			const result = await getAllProducts()
			if (result.success) {
				const all = Object.values(result.products)
				const filter = all.filter(item => item.title.includes(keyword))
				setFilteredProducts(filter)
				setCurrentPage(1)
			}
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}
	//目前要顯示的商品
	const displayProducts = keyword
		? filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
		: products
	const totalPages =
		keyword && filteredProducts.length > 0
			? Math.ceil(filteredProducts.length / productsPerPage)
			: pagination.total_pages || 1
	return (
		<main>
			{/*商品list*/}
			<section className="container py-8 py-lg-9">
				<div className="row">
					<ProductCategory />
					<ProductsSection
						products={displayProducts}
						pagination={{ ...pagination, total_pages: totalPages }}
						changePage={setCurrentPage}
						isLoading={isLoading}
						keyword={keyword}
						setKeyword={setKeyword}
						onSearch={handleSearch}
						currentPage={currentPage}
					/>
				</div>
			</section>

			<Compare nonCompare={false} showCompareArea={true} />
		</main>
	)
}

export default ProductList
