import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import SectionHeader from '../SectionHeader/SectionHeader'

import SingleButtonCard from '@/components/card/ProductCard/SingleButtonCard'
import SkeletonCard from '@/components/card/SkeletonCard/SkeletonCard'

const ProductSection = ({ products, isLoading }) => {
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
			{isLoading ? (
				<div className="row flex-nowrap overflow-hidden">
					{[...Array(4)].map((_, index) => (
						<div key={index} className="col-10 col-md-4 col-lg-4" style={{ flex: '0 0 auto' }}>
							<SkeletonCard />
						</div>
					))}
				</div>
			) : (
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
							slidesPerView: 2.2,
						},
						996: {
							slidesPerView: 3,
						},
					}}
				>
					{products.map(product => (
						<SwiperSlide key={product.id}>
							<SingleButtonCard {...product} size="large" showOrigin={false} isHome={true} />
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</section>
	)
}

export default ProductSection
