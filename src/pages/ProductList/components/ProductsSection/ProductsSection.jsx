import SearchBar from '@/components/input/SearchBar/SearchBar'
import TwoButtonCard from '@/components/card/ProductCard/TwoButtonCard'
import { useCallback, useEffect, useState } from 'react'
import { getProducts } from '@/services/product.api'
import Pagination from '../Pagination/Pagination'
import { useCart } from '@/context/cartContext'

const ProductsSection = () => {
	const [products, setProducts] = useState([])
	const [pagination, setPagination] = useState({})
	const { addToCart } = useCart()

	const getProductsApi = useCallback(async (page = 1) => {
		const result = await getProducts(page)
		//console.log(result)
		if (!result.success) {
			alert(result.error)
			return
		}
		setProducts(result.products)
		setPagination(result.pagination)
	}, [])
	useEffect(() => {
		;(async () => {
			getProductsApi()
		})()
	}, [])
	const handleAddCart = async productId => {
		await addToCart(productId, 1)
	}

	const transformProducts = products.map(({ price, origin_price, weight, unit, ...other }) => ({
		...other,
		price: Number(price),
		originPrice: Number(origin_price) !== Number(price) ? Number(origin_price) : null,
		quantifier: `${weight}${unit}`,
	}))

	return (
		<div className="col-lg-9">
			{/*商品搜尋欄*/}
			<div className="position-relative mb-7 mb-lg-8">
				<SearchBar />
			</div>
			{/*商品list*/}
			<div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-3 mb-8">
				{transformProducts.map(item => (
					<div className="col mb-6 mb-xxl-7 d-flex justify-content-center" key={item.id}>
						<TwoButtonCard
							origin={item.farm}
							img={item.imageUrl}
							name={item.title}
							description={item.description}
							price={item.price}
							originPrice={item.originPrice}
							quantifier={item.quantifier}
							onAddCart={() => handleAddCart(item.id)}
						/>
					</div>
				))}
			</div>
			<Pagination pagination={pagination} changePage={getProductsApi} />
		</div>
	)
}
export default ProductsSection
