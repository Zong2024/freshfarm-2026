import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import SectionHeader from '../SectionHeader/SectionHeader'

import SingleButtonCard from '@/components/card/ProductCard/SingleButtonCard'

const ProductSection = ({ products }) => {
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
				{products.map(product => (
					<SwiperSlide>
						<SingleButtonCard
							name={product.name}
							origin={product.origin}
							description={product.description}
							price={product.discountPrice !== null ? product.discountPrice : product.price}
							originPrice={product.discountPrice !== null ? product.price : ''}
							quantifier={`${product.weight}${product.unit}`}
							img={product.img}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default ProductSection
