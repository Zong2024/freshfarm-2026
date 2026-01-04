import 'swiper/css'
import CategorySection from './components/CategorySection/CategorySection'
import HeroSwiper from './components/HeroSwiper/HeroSwiper'
import ProductSection from './components/ProductSection/ProductSection'
import { HOME_IMAGES } from '../../constants/images'
import StorySection from './components/StorySection/StorySection'
import BrandFeaturesSection from './components/BrandFeaturesSection/BrandFeaturesSection'
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
		<main>
			<HeroSwiper banners={banners} />
			<ProductSection products={products} />
			<CategorySection />
			<StorySection />
			<BrandFeaturesSection />
		</main>
	)
}

export default Home
