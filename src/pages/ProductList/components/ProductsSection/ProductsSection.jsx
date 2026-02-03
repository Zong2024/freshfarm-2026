import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import SearchBar from '@/components/input/SearchBar/SearchBar'
import TwoButtonCard from '@/components/card/ProductCard/TwoButtonCard'
import styles from './ProductsSection.module.scss'
import { useEffect, useState } from 'react'
import { getProducts } from '@/services/product.api'

const ProductsSection = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const getProductsApi = async () => {
			const result = await getProducts()
			console.log('api', result)
			if (!result.success) {
				alert(result.error)
				return
			}
			setProducts(result.products)
		}
		getProductsApi()
	}, [])

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
						/>
					</div>
				))}
			</div>
			{/*分頁*/}
			<div>
				<nav aria-label="Page navigation example">
					<ul className={clsx('pagination justify-content-center', styles.pagination)}>
						<li className="page-item me-3">
							<Link
								className={clsx(
									'page-link shadow-none border-0 d-flex justify-content-center',
									styles.paginationPage,
									styles.pageLink
								)}
								href="#"
								aria-label="Previous"
							>
								<span className="material-icons">keyboard_arrow_left</span>
							</Link>
						</li>
						<li className="page-item active me-2" aria-current="page">
							<Link
								className={clsx(
									'page-link shadow-none agination rounded-circle border-0 py-1 px-2 text-center',
									styles.paginationPage,
									styles.pageLink
								)}
								href="#"
							>
								1
							</Link>
						</li>
						<li className="page-item me-2">
							<Link
								className={clsx(
									'page-link shadow-none agination rounded-circle border-0 py-1 px-2 text-center',
									styles.paginationPage,
									styles.pageLink
								)}
								href="#"
							>
								2
							</Link>
						</li>
						<li className="page-item me-3">
							<Link
								className={clsx(
									'page-link shadow-none agination rounded-circle border-0 py-1 px-2 text-center',
									styles.paginationPage,
									styles.pageLink
								)}
								href="#"
							>
								3
							</Link>
						</li>
						<li className="page-item">
							<Link
								className={clsx(
									'page-link shadow-none border-0 d-flex justify-content-center',
									styles.paginationPage,
									styles.pageLink
								)}
								href="#"
								aria-label="Next"
							>
								<span className="material-icons">keyboard_arrow_right</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
export default ProductsSection
