import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { clsx } from 'clsx'
import styles from './HeroSwiper.module.scss'

import SearchBar from '@/components/input/SearchBar/SearchBar'
const HeroSwiper = ({ banners }) => {
	return (
		<Swiper
			modules={[Autoplay, Pagination]}
			// autoplay={{ delay: 10000, disableOnInteraction: false }}
			spaceBetween={0}
			loop={true}
			className="decorated"
		>
			{banners.map(banner => (
				<SwiperSlide key={banner.id}>
					<div className={clsx(styles.slideWrapper)}>
						<picture className={clsx(styles.blackScreen)}>
							<source media="(min-width:992px)" srcSet={banner.images.desktop} />
							<img src={banner.images.mobile} alt="" className={clsx(styles.heroImg)} />
						</picture>
					</div>
					<div
						className={clsx('container d-flex flex-column justify-content-end', styles.heroContent)}
					>
						<div className="d-lg-flex">
							{banner.brand && <h4 className="fs-lg-1 m-1 text-primary-100  ">{banner.brand}</h4>}
							<h4 className="fs-lg-1 text-white mb-3  mb-lg-4">{banner.title}</h4>
						</div>
						<h5 className="fs-lg-2 text-white mb-6 mb-lg-8">{banner.subtitle}</h5>
						<SearchBar />
					</div>
					<div className={clsx(styles.wave)}></div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default HeroSwiper
