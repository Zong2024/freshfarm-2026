import Compare from '../../components/Layout/Compare/Compare'
import ProductCategory from './components/ProductCategory/ProductCategory'
import ProductsSection from './components/ProductsSection/ProductsSection'
const ProductList = () => {
	return (
		<main>
			{/*商品list*/}
			<section className="container py-8 py-lg-9">
				<div className="row">
					<ProductCategory />
					<ProductsSection />
				</div>
			</section>

			<Compare nonCompare={false} showCompareArea={true} />
		</main>
	)
}

export default ProductList
