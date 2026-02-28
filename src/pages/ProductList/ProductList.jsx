import Compare from '../../components/Layout/Compare/Compare'
import ProductCategory from './components/ProductCategory/ProductCategory'
import ProductsSection from './components/ProductsSection/ProductsSection'
import { useCallback, useEffect, useState } from 'react'
import { getAllProducts, getProducts } from '@/services/product.api'
import { useSearchParams } from 'react-router-dom'

const ProductList = () => {
	const [searchParams] = useSearchParams()
	const urlKeyword = searchParams.get('keyword') || '' // 首頁搜尋跳轉的 keyword

	const [products, setProducts] = useState([])
	const [pagination, setPagination] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	const [filteredProducts, setFilteredProducts] = useState([]) // 搜尋結果
	const [currentPage, setCurrentPage] = useState(1)
	const productsPerPage = 9
	const [keyword, setKeyword] = useState('') // 產品頁內部搜尋
	const [searchConfirmed, setSearchConfirmed] = useState(false) // 是否真正按搜尋或首頁跳轉

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

	const handleSearch = async searchValue => {
		if (!searchValue.trim()) return
		setIsLoading(true)
		try {
			//抓全部商品
			const result = await getAllProducts()
			if (result.success) {
				const all = Object.values(result.products)
				const filter = all.filter(item => item.title.includes(searchValue))
				setFilteredProducts(filter)
				setCurrentPage(1)
				setSearchConfirmed(true) // 搜尋確認完成
			}
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}
	//首次進入頁面判斷是否來自首頁搜尋
	useEffect(() => {
		const initKeyword = urlKeyword.trim()
		if (initKeyword) {
			setKeyword(initKeyword)
			handleSearch(initKeyword)
		} else {
			getProductsApi(currentPage)
		}
	}, [urlKeyword])

	// 清空搜尋框時，顯示原本商品，重置搜尋狀態
	useEffect(() => {
		if (!keyword.trim()) {
			setFilteredProducts([]) // 清空舊搜尋結果
			setSearchConfirmed(false)
			getProductsApi(currentPage)
		}
	}, [currentPage, keyword, getProductsApi])

	//目前要顯示的商品
	const displayProducts = searchConfirmed
		? filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
		: products
	const totalPages =
		searchConfirmed && filteredProducts.length
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
						onSearch={() => handleSearch(keyword)}
						currentPage={currentPage}
					/>
				</div>
			</section>

			<Compare />
		</main>
	)
}

export default ProductList
