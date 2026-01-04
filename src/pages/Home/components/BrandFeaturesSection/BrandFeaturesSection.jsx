import FeatureCard from '@/components/card/FeatureCard/FeatureCard'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './BrandFeaturesSection.module.scss'

import car from './assets/car.png'
import vegetable from './assets/vegetable.png'
import compost from './assets/compost.png'

const featureCardInfo = [
	{
		id: 1,
		img: car,
		title: '產地直送的極致新鮮',
		content: '我們直接從產地將食材送到您手中，確保您享用的是最當季、最新鮮的美味。',
	},
	{
		id: 2,
		img: vegetable,
		title: '安心透明的食材來源',
		content: '每一項商品都有清楚產地故事、農友介紹與完整認證資訊，讓您吃得安心又放心。',
	},
	{
		id: 3,
		img: compost,
		title: '在地小農與永續農業',
		content: '您的每一次消費，都直接幫助辛勤耕耘的在地農友促進台灣農業的永續發展。 ',
	},
]

const BrandFeaturesSection = () => {
	return (
		<section className={styles.bg}>
			<div className="container py-10 py-lg-13">
				<div className="mb-lg-9 mb-7">
					<SectionHeader
						badge="品牌理念"
						title="為何選擇 FreshFarm"
						subtitle="從產地到餐桌，選擇一份安心與用心"
					/>
				</div>
				<div className={styles.cardContainer}>
					{featureCardInfo.map(item => (
						<FeatureCard img={item.img} title={item.title} content={item.content} />
					))}
				</div>
			</div>
		</section>
	)
}

export default BrandFeaturesSection
