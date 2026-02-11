import SearchBar from '@/components/input/SearchBar/SearchBar'
import TwoButtonCard from '@/components/card/ProductCard/TwoButtonCard'
import { postCart } from '@/services/cart.api'
import Pagination from '../Pagination/Pagination'
import SkeletonCard from '@/components/card/SkeletonCard/SkeletonCard'

const ProductsSection = ({ products, pagination, changePage, isLoading }) => {
	const handleAddCart = async productId => {
		const result = await postCart({
			product_id: productId,
			qty: 1,
		})

		if (!result.success) {
			alert(result.error)
			return
		}
		alert('已加入購物車')
	}

	return (
		<div className="col-lg-9">
			{/*商品搜尋欄*/}
			<div className="position-relative mb-7 mb-lg-8">
				<SearchBar />
			</div>
			{/*商品list*/}
			<div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-3 mb-8">
				{isLoading
					? [...Array(6)].map((_, index) => (
							<div
								className="col mb-6 mb-xxl-7 d-flex justify-content-center"
								key={`skeleton-${index}`}
							>
								<SkeletonCard />
							</div>
						))
					: products.map(product => (
							<div className="col mb-6 mb-xxl-7 d-flex justify-content-center" key={product.id}>
								<TwoButtonCard {...product} onAddCart={() => handleAddCart(product.id)} />
							</div>
						))}
			</div>
			{!isLoading && pagination.total_pages > 1 && (
				<Pagination pagination={pagination} changePage={changePage} />
			)}
		</div>
	)
}

export default ProductsSection
