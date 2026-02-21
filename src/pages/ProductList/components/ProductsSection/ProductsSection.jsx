import SearchBar from '@/components/input/SearchBar/SearchBar'
import TwoButtonCard from '@/components/card/ProductCard/TwoButtonCard'
import Pagination from '../Pagination/Pagination'
import { useCart } from '@/context/cartContext'
import SkeletonCard from '@/components/card/SkeletonCard/SkeletonCard'

const ProductsSection = ({
	products,
	pagination,
	changePage,
	isLoading,
	keyword,
	setKeyword,
	onSearch,
	currentPage,
}) => {
	const { addToCart } = useCart()
	const handleAddCart = async productId => {
		await addToCart(productId, 1)
	}

	return (
		<div className="col-lg-9">
			{/*商品搜尋欄*/}
			<div className="position-relative mb-7 mb-lg-8">
				<SearchBar keyword={keyword} setKeyword={setKeyword} onSearch={onSearch} />
			</div>
			{/*商品list*/}
			{isLoading ? (
				<div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-3 mb-8">
					{[...Array(6)].map((_, index) => (
						<div
							className="col mb-6 mb-xxl-7 d-flex justify-content-center"
							key={`skeleton-${index}`}
						>
							<SkeletonCard />
						</div>
					))}
				</div>
			) : products.length > 0 ? (
				<div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-3 mb-8">
					{products.map(product => (
						<div className="col mb-6 mb-xxl-7 d-flex justify-content-center" key={product.id}>
							<TwoButtonCard {...product} onAddCart={() => handleAddCart(product.id)} />
						</div>
					))}
				</div>
			) : (
				<div className="col-12 text-center mb-8">
					<h3 className="text-danger">找不到商品，請重新搜尋</h3>
				</div>
			)}
			{!isLoading && pagination.total_pages > 1 && (
				<Pagination pagination={pagination} changePage={changePage} currentPage={currentPage} />
			)}
		</div>
	)
}

export default ProductsSection
