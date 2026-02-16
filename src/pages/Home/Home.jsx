import 'swiper/css'
import CategorySection from './components/CategorySection/CategorySection'
import HeroSwiper from './components/HeroSwiper/HeroSwiper'
import { HOME_IMAGES } from '../../constants/images'
import StorySection from './components/StorySection/StorySection'
import BrandFeaturesSection from './components/BrandFeaturesSection/BrandFeaturesSection'
import { getProducts } from '@/services/product.api'
import { useEffect, useState } from 'react'
import SectionHeader from './components/SectionHeader/SectionHeader'
import CarouselSection from '@/components/CarouselSection/CarouselSection'
import SingleButtonCard from '@/components/card/ProductCard/SingleButtonCard'
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
const Home = () => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const fetchProducts = async () => {
			setIsLoading(true)
			try {
				const res = await getProducts()
				if (res.success && res.products) {
					setProducts(res.products.slice(0, 5))
				} else {
					console.error('API error', res.error)
				}
			} catch (error) {
				console.error('讀取商品錯誤', error)
			} finally {
				setIsLoading(false)
			}
		}
		fetchProducts()
	}, [])

	const productHeader = (
		<SectionHeader
			badge="時令直送"
			title="當季限定  強力推薦"
			subtitle="支持在地，享受最新鮮的台灣味"
		/>
	)
	const renderProductCard = product => (
		<SingleButtonCard
			title={product.title}
			description={product.description}
			price={product.price}
			weight={product.weight}
			unit={product.unit}
			imageUrl={product.imageUrl}
		/>
	)

	return (
		<main>
			<HeroSwiper banners={banners} />
			<CarouselSection
				header={productHeader}
				isLoading={isLoading}
				items={products}
				autoplay={true}
				renderItem={renderProductCard}
			/>
			<CategorySection />
			<StorySection />
			<BrandFeaturesSection />
		</main>
	)
}

export default Home
