import 'swiper/css'
import CategorySection from './components/CategorySection/CategorySection'
import HeroSwiper from './components/HeroSwiper/HeroSwiper'
import ProductSection from './components/ProductSection/ProductSection'
import { HOME_IMAGES } from '../../constants/images'
import StorySection from './components/StorySection/StorySection'
import BrandFeaturesSection from './components/BrandFeaturesSection/BrandFeaturesSection'
import { getProducts } from '@/services/product.api'
import { useEffect, useState } from 'react'
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
					console.log(res.products.slice(0, 5))
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
	return (
		<main>
			<HeroSwiper banners={banners} />
			<ProductSection products={products} isLoading={isLoading} />
			<CategorySection />
			<StorySection />
			<BrandFeaturesSection />
		</main>
	)
}

export default Home
