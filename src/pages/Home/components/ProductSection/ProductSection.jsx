import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import SectionHeader from '../SectionHeader/SectionHeader'

import SingleButtonCard from '@/components/card/ProductCard/SingleButtonCard'

const ProductSection = ({ products }) => {
	const transformProducts = products.map(({ price, discountPrice, weight, unit, ...other }) => ({
		...other,
		price: discountPrice !== null ? discountPrice : price,
		originPrice: discountPrice !== null ? price : null,
		quantifier: `${weight}${unit}`,
	}))
	return (
		<section className="container py-8 py-lg-11">
			<div className="d-lg-flex justify-content-between mb-lg-9 mb-7">
				<SectionHeader
					badge="時令直送"
					title="當季限定  強力推薦"
					subtitle="支持在地，享受最新鮮的台灣味"
				/>
				<div className="d-flex align-items-end mt-6">
					<button type="button" className="prevBtn btn me-6 bg-gray-100 p-2" aria-label="上一個">
						<span className="material-icons align-middle">arrow_back</span>
					</button>
					<button type="button" className="nextBtn btn bg-gray-100 p-2" aria-label="下一個">
						<span className="material-icons align-middle">arrow_forward</span>
					</button>
				</div>
			</div>
			<Swiper
				modules={[Navigation]}
				spaceBetween={24}
				slidesPerView={1.2}
				navigation={{
					prevEl: '.prevBtn',
					nextEl: '.nextBtn',
				}}
				breakpoints={{
					576: {
						slidesPerView: 1.2,
					},
					996: {
						slidesPerView: 3,
					},
				}}
			>
				{transformProducts.map(product => (
					<SwiperSlide>
						<SingleButtonCard
							//props有點太過長有三元判斷可以拉到上面先做判斷jsx就負責傳值
							name={product.name}
							origin={product.origin}
							description={product.description}
							price={product.price}
							originPrice={product.originPrice}
							quantifier={product.quantifier}
							img={product.img}
							size="large"
							showOrigin={false}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default ProductSection
