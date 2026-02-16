import productCategory1 from '@/assets/images/category/product-category-1.jpg'
import productCategory2 from '@/assets/images/category/product-category-2.jpg'
import productCategory3 from '@/assets/images/category/product-category-3.jpg'
import productCategory4 from '@/assets/images/category/product-category-4.jpg'
import productCategorySm1 from '@/assets/images/category/product-category-sm-1.jpg'
import productCategorySm2 from '@/assets/images/category/product-category-sm-2.jpg'
import productCategorySm3 from '@/assets/images/category/product-category-sm-3.jpg'
import productCategorySm4 from '@/assets/images/category/product-category-sm-4.jpg'
import productIcon1 from '@/assets/images/category/product-category-icon-1.png'
import productIcon2 from '@/assets/images/category/product-category-icon-2.png'
import productIcon3 from '@/assets/images/category/product-category-icon-3.png'
import productIcon4 from '@/assets/images/category/product-category-icon-4.png'

export const categoryInfo = [
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
