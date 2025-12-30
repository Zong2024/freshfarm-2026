import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'

import ProductCard from '../components/card/ProductCard'
import CategoryHighlightCard from '../components/Home/CategoryCard/CategoryCard'

import { HOME_IMAGES } from '../constants/images'
const banners = [
	{
		id: 1,
		brand: 'FreshFarm',
		title: '從產地到餐桌的直線距離',
		subtitle: '把產地的鮮活，直送你家',
		images: {
			desktop: HOME_IMAGES.HERO1,
			mobile: HOME_IMAGES.HERO_SM1,
		},
	},
	{
		id: 2,
		brand: '',
		title: '與在地同行，品嚐土地的真味',
		subtitle: '讓每一口，都有個好故事',
		images: {
			desktop: HOME_IMAGES.HERO2,
			mobile: HOME_IMAGES.HERO_SM2,
		},
	},
	{
		id: 3,
		brand: '',
		title: '今日採收，明日餐桌',
		subtitle: '看得見的產地，吃得到的安心',
		images: {
			desktop: HOME_IMAGES.HERO3,
			mobile: HOME_IMAGES.HERO_SM3,
		},
	},
]
const products = [
	{
		id: 1,
		name: '嚴選大樹老欉玉荷包',
		origin: '古樂農場',
		description:
			'玉荷包、黑葉等品種在夏季上市，果肉Q彈甜中帶酸，風玉荷包、黑葉等玉荷包、黑葉等品種在夏季上市，果肉Q彈甜中帶酸，風玉荷包、黑葉等',
		price: 729,
		discountPrice: 683,
		weight: 600,
		img: 'https://github.com/Zong2024/freshfarm/blob/782bcd3365a6e7ea7dbce395488ad9591870eec8/assets/images/product/product-image-%E8%8D%94%E6%9E%9D.jpg?raw=true',
	},
	{
		id: 2,
		name: '有機綠竹筍(特級)4台',
		origin: '農芒',
		description:
			'夏季是綠竹筍的產季口感清甜、脆嫩無論涼拌、煮湯都美夏季是綠竹筍的產季口感清甜、脆嫩無論涼拌、煮湯都美夏季是綠竹筍的產季口感清甜、脆嫩無論涼拌、煮湯都美',
		price: 790,
		discountPrice: null,
		weight: 500,
		img: 'https://github.com/Zong2024/freshfarm/blob/master/assets/images/product/product-image-%E7%B6%A0%E7%AB%B9%E7%AD%8D.jpg?raw=true',
	},
	{
		id: 3,
		name: '拉拉山洪家水蜜桃',
		origin: '無花果農場',
		description: '主要產於高山，果肉細緻柔嫩，香氣十足，入口即化',
		price: 760,
		discountPrice: 710,
		weight: 800,
		img: 'https://github.com/Zong2024/freshfarm/blob/master/assets/images/product/product-image-%E6%B0%B4%E8%9C%9C%E6%A1%83.jpg?raw=true',
	},
]
const Home = () => {
	return (
		<>
			<section>
				<Swiper
					modules={[Autoplay, Pagination]}
					// autoplay={{ delay: 10000, disableOnInteraction: false }}
					spaceBetween={0}
					// loop={true}
					className="decorated"
				>
					{banners.map(banner => (
						<SwiperSlide key={banner.id}>
							<div className="hero-slide-wrapper">
								<picture className="blackScreen">
									<source media="(min-width:992px)" srcSet={banner.images.desktop} />
									<img src={banner.images.mobile} alt="" className="hero-banner-img" />
								</picture>
							</div>
							<div className="container hero-content-overlay d-flex flex-column justify-content-end">
								<div className="d-lg-flex">
									{banner.brand && (
										<h4 className="fs-lg-1 m-1 text-primary-100  ">{banner.brand}</h4>
									)}
									<h4 className="fs-lg-1 text-white mb-3  mb-lg-4">{banner.title}</h4>
								</div>
								<h5 className="fs-lg-2 text-white mb-6 mb-lg-8">{banner.subtitle}</h5>
								<div className="search-box">
									<div className="input-group">
										<input
											type="text"
											className="form-control search-input "
											placeholder="請輸入商品名稱…"
										/>
										<button type="button" className="input-group-text bg-white search-icon">
											<span className="material-icons fs-4 ">search</span>
										</button>
									</div>
								</div>
							</div>
							<div className="wave"></div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			<section className="container py-8 py-lg-11">
				<div className="d-lg-flex justify-content-between mb-lg-9 mb-7">
					<div className="section-title-decorated">
						<div className="ps-4 mb-6 mb-lg-0">
							<span className="badge rounded-pill bg-primary-300 px-2 py-1">時令直送</span>
							<h4 className="my-2 fs-lg-1">當季限定 強力推薦</h4>
							<p className="fs-lg-5 text-gray-400">支持在地，享受最新鮮的台灣味</p>
						</div>
					</div>
					<div className="d-flex align-items-end">
						<button
							type="button"
							className="custom-prev-btn btn me-6 bg-gray-100 p-2"
							aria-label="上一個"
						>
							<span className="material-icons align-middle">arrow_back</span>
						</button>
						<button
							type="button"
							className="custom-next-btn btn bg-gray-100 p-2"
							aria-label="下一個"
						>
							<span className="material-icons align-middle">arrow_forward</span>
						</button>
					</div>
				</div>
				<Swiper
					modules={[Navigation]}
					spaceBetween={24}
					slidesPerView={1.2}
					navigation={{
						prevEl: '.custom-prev-btn',
						nextEl: '.custom-next-btn',
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
							<ProductCard
								name={product.name}
								description={product.description}
								price={product.price}
								weight={product.weight}
								img={product.img}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			<section className="category-section">
				<div className="container py-8 py-lg-11">
					<div className="d-lg-flex justify-content-between mb-lg-9 mb-7">
						<div className="section-title-decorated">
							<div className="ps-4 mb-6 mb-lg-0">
								<span className="badge rounded-pill bg-primary-300 px-2 py-1">商品分類</span>
								<h4 className="my-2 fs-lg-1">當季限定 強力推薦</h4>
								<p className="fs-lg-5 text-gray-400">支持在地，享受最新鮮的台灣味</p>
							</div>
						</div>
					</div>
					<CategoryHighlightCard />
				</div>
			</section>
		</>
	)
}

export default Home
