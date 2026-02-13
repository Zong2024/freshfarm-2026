import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'

import { clsx } from 'clsx'
import SkeletonCard from '../card/SkeletonCard/SkeletonCard'

const CarouselSection = ({
	isLoading,
	hideNavigationButton = false,
	items = [],
	renderItem,
	header,
	autoplay = false,
	spaceBetween = 24,
	slidesPerView = 1.2,
	className,
	breakpoints = {
		576: { slidesPerView: 1.2 },
		996: { slidesPerView: 3 },
	},
}) => {
	// 使用 useRef 避免重新渲染
	const prevRef = useRef(null)
	const nextRef = useRef(null)

	return (
		<section className={clsx('container py-8 py-lg-11', className)}>
			{/* Header 與 導航按鈕區塊 */}
			<div className="d-lg-flex justify-content-between mb-lg-9 mb-7 align-items-end">
				<div className="flex-grow-1">{header}</div>

				<div
					className={clsx(
						'd-flex align-items-end mt-6 ms-lg-4',
						hideNavigationButton ? 'd-none d-lg-flex' : 'd-flex'
					)}
				>
					<button
						ref={prevRef}
						type="button"
						className="btn me-6 bg-gray-100 p-2 border-0"
						aria-label="上一個"
					>
						<span className="material-icons align-middle">arrow_back</span>
					</button>
					<button
						ref={nextRef}
						type="button"
						className="btn bg-gray-100 p-2 border-0"
						aria-label="下一個"
					>
						<span className="material-icons align-middle">arrow_forward</span>
					</button>
				</div>
			</div>

			{/* Swiper 本體 */}
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
					modules={[Navigation, Autoplay]}
					loop={true}
					spaceBetween={spaceBetween}
					slidesPerView={slidesPerView}
					onBeforeInit={swiper => {
						if (typeof swiper.params.navigation !== 'boolean') {
							swiper.params.navigation.prevEl = prevRef.current
							swiper.params.navigation.nextEl = nextRef.current
						}
					}}
					navigation={true}
					autoplay={
						autoplay
							? typeof autoplay === 'object'
								? autoplay
								: { delay: 3000, disableOnInteraction: false }
							: false
					}
					breakpoints={breakpoints}
				>
					{items.map((item, index) => (
						<SwiperSlide key={item.id || index} className="h-auto">
							<div className="w-100">
								{renderItem ? (
									renderItem(item)
								) : (
									<img src={item} alt={`slide-${index}`} className="img-fluid" />
								)}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</section>
	)
}

export default CarouselSection
