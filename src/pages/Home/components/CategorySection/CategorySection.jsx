import SectionHeader from '../SectionHeader/SectionHeader'

import productCategory1 from './assets/product-category-1.jpg'
import productCategory2 from './assets/product-category-2.jpg'
import productCategory3 from './assets/product-category-3.jpg'
import productCategory4 from './assets/product-category-4.jpg'
import productCategorySm1 from './assets/product-category-sm-1.jpg'
import productCategorySm2 from './assets/product-category-sm-2.jpg'
import productCategorySm3 from './assets/product-category-sm-3.jpg'
import productCategorySm4 from './assets/product-category-sm-4.jpg'
import productIcon1 from './assets/product-category-icon-1.png'
import productIcon2 from './assets/product-category-icon-2.png'
import productIcon3 from './assets/product-category-icon-3.png'
import productIcon4 from './assets/product-category-icon-4.png'

import clsx from 'clsx'
import styles from './CategorySection.module.scss'

const CategorySection = () => {
	const productCategoryInfo = [
		{
			id: 1,
			images: {
				desktop: productCategory1,
				mobile: productCategorySm1,
			},
			icon: productIcon1,
			title: '當季蔬果',
			subtitle: 'In Season',
			description:
				'從春日的翠綠葉菜到夏日的甜美瓜果，從秋季的豐收根莖到冬日的溫暖果實，我們與全台堅持友善耕作的小農合作，確保每一口都是當令的鮮甜與營養。',
		},
		{
			id: 2,
			images: {
				desktop: productCategory2,
				mobile: productCategorySm2,
			},
			icon: productIcon2,
			title: '現撈海鮮',
			subtitle: 'Fresh Catch',
			description:
				'我們與在地漁民緊密合作，確保每一隻蝦都是當日現撈，並以最嚴謹的保鮮技術，鎖住最原始的海洋風味。每項商品都附有詳細的捕撈日期、產地資訊與檢驗報告，讓您吃得安心又放心。',
		},
		{
			id: 3,
			images: {
				desktop: productCategory3,
				mobile: productCategorySm3,
			},
			icon: productIcon3,
			title: '優質肉蛋',
			subtitle: 'Prime Cuts',
			description:
				'從口感鮮美的自然豬肉、肉質紮實的放山雞，到營養豐富的機能蛋，我們確保每一份肉品與蛋品都符合嚴格的品質標準。您可以透過平台追溯飼養環境、飼料來源以及相關認證。',
		},
		{
			id: 4,
			images: {
				desktop: productCategory4,
				mobile: productCategorySm4,
			},
			icon: productIcon4,
			title: '在地加工品',
			subtitle: 'Local Picks',
			description:
				'從手工熬煮的天然果醬、陽光曬製的健康果乾，到遵循古法製作的在地米麵、特色醬料，每一項產品都來自在地小農的用心。您可以深入了解製作過程、原料來源與品牌故事，感受產品背後的溫度與堅持。',
		},
	]
	return (
		<>
			<section className={styles.categorySection}>
				<div className="container py-8 py-lg-11">
					<div className="mb-lg-9 mb-7">
						<SectionHeader
							badge="商品分類"
							title="您的餐桌 是小農最好的舞台"
							subtitle="最簡單的選擇，最純粹的美味"
						/>
					</div>
					{productCategoryInfo.map(product => {
						return (
							<div className={clsx('border-0 mb-6 mb-lg-14', styles.productCard)} key={product.id}>
								<picture>
									<source srcSet={product.images.desktop} media="(min-width: 992px)" />
									<img
										src={product.images.mobile}
										alt=""
										className={clsx('card-img-top', styles.productImg)}
									/>
								</picture>

								<div
									className={clsx(
										'card-body position-relative d-flex flex-column justify-content-center align-items-center p-2',
										styles.productContent
									)}
								>
									<img
										src={product.icon}
										alt=""
										className={clsx(
											'position-absolute top-0 end-0 d-none d-lg-block',
											styles.productIcon
										)}
									/>
									<div className="d-flex justify-content-between align-items-center w-100 mb-3 mb-lg-6">
										<div>
											<h4 className="fs-lg-2 text-primary-400 mb-1">{product.title}</h4>
											<h6 className="fs-lg-5 text-gray-300">{product.subtitle}</h6>
										</div>
										<img
											src={product.icon}
											alt=""
											className={clsx('d-lg-none', styles.productIcon)}
										/>
									</div>
									<p className="fs-5">{product.description}</p>
								</div>
							</div>
						)
					})}
				</div>
			</section>
		</>
	)
}

export default CategorySection
