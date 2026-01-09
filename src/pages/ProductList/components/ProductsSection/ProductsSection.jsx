import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import SearchBar from '@/components/input/SearchBar/SearchBar'
import TwoButtonCard from '@/components/card/ProductCard/TwoButtonCard'
import styles from './ProductsSection.module.scss'
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
		unit: 'g',
		imgUrl:
			'https://github.com/Zong2024/freshfarm/blob/master/assets/images/product/product-image-%E8%8D%94%E6%9E%9D.jpg?raw=true',
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
		unit: 'g',
		imgUrl:
			'https://github.com/Zong2024/freshfarm/blob/master/assets/images/product/product-image-%E7%B6%A0%E7%AB%B9%E7%AD%8D.jpg?raw=true',
	},
	{
		id: 3,
		name: '拉拉山洪家水蜜桃',
		origin: '無花果農場',
		description: '主要產於高山，果肉細緻柔嫩，香氣十足，入口即化',
		price: 760,
		discountPrice: 710,
		weight: 800,
		unit: 'g',
		imgUrl:
			'https://github.com/Zong2024/freshfarm/blob/master/assets/images/product/product-image-%E6%B0%B4%E8%9C%9C%E6%A1%83.jpg?raw=true',
	},
	{
		id: 4,
		name: '無毒青花菜',
		origin: '紅奇有機農場',
		description: '清脆鮮甜，適合快炒或川燙，富含膳食纖維',
		price: 79,
		discountPrice: null,
		weight: 300,
		unit: 'g',
		imgUrl:
			'https://github.com/Zong2024/freshfarm/blob/master/assets/images/product/product-image-%E9%9D%92%E8%8A%B1%E8%8F%9C.jpg?raw=true',
	},
	{
		id: 5,
		name: '黑豬梅花火鍋片',
		origin: '竹塘鄉農會',
		description: '油花均勻、口感滑嫩，火鍋與炒菜皆適宜',
		price: 500,
		discountPrice: 468,
		weight: 300,
		unit: 'g',
		imgUrl:
			'https://github.com/Zong2024/freshfarm/blob/master/assets/images/product/product-image-%E8%B1%AC%E8%82%89%E7%89%87.jpg?raw=true',
	},
	{
		id: 6,
		name: '屏東香米',
		origin: '古樂農場',
		description: '口感Q彈、米香濃，是每日主食的安心選擇',
		price: 760,
		discountPrice: 600,
		weight: 1500,
		unit: 'g',
		imgUrl:
			'https://github.com/Zong2024/freshfarm/blob/master/assets/images/product/product-image-%E9%A6%99%E7%B1%B3.jpg?raw=true',
	},
	{
		id: 7,
		name: '放牧土雞蛋',
		origin: '以拉西代',
		description: '蛋黃濃郁自然橘紅，無抗生素殘留',
		price: 130,
		discountPrice: 110,
		weight: 10,
		unit: '顆',
		imgUrl:
			'https://github.com/Zong2024/freshfarm/blob/master/assets/images/product/product-image-%E6%94%BE%E7%89%A7%E5%9C%9F%E9%9B%9E%E8%9B%8B.jpg?raw=true',
	},
	{
		id: 8,
		name: '牛番茄（大果）',
		origin: 'AphineBro高山兄弟',
		description: '多汁微酸，適合涼拌、燉煮',
		price: 142,
		discountPrice: null,
		weight: 500,
		unit: 'g',
		imgUrl:
			'https://github.com/Zong2024/freshfarm/blob/master/assets/images/product/product-image-%E7%89%9B%E7%95%AA%E8%8C%84.jpg?raw=true',
	},
	{
		id: 9,
		name: '小農高麗菜',
		origin: '保證責任雲林縣永光果菜生產合作社',
		description: '脆甜飽滿，適合清炒、煮湯、滷煮',
		price: 79,
		discountPrice: null,
		weight: 1000,
		unit: 'g',
		imgUrl:
			'https://github.com/Zong2024/freshfarm/blob/master/assets/images/product/product-image-%E9%AB%98%E9%BA%97%E8%8F%9C.jpg?raw=true',
	},
]
const ProductsSection = () => {
	return (
		<div className="col-lg-9">
			{/*商品搜尋欄*/}
			<div className="position-relative mb-7 mb-lg-8">
				<SearchBar />
				<input
					type="text"
					className={clsx('form-control shadow-none', styles.formControl)}
					placeholder="搜尋商品名稱"
				/>
				<span
					className={clsx(
						'material-icons position-absolute text-primary align-bottom',
						styles.productSearchBar
					)}
				>
					search
				</span>
			</div>
			{/*商品list*/}
			<div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-3 mb-8">
				{products.map(item => (
					<div className="col mb-6 mb-xxl-7 d-flex justify-content-center" key={item.id}>
						<TwoButtonCard
							origin={item.origin}
							img={item.imgUrl}
							name={item.name}
							description={item.description}
							price={item.discountPrice !== null ? item.discountPrice : item.price}
							originPrice={item.discountPrice !== null ? item.price : ''}
							quantifier={`${item.weight}${item.unit}`}
						/>
					</div>
				))}
			</div>
			{/*分頁*/}
			<div>
				<nav aria-label="Page navigation example">
					<ul className={clsx('pagination justify-content-center', styles.pagination)}>
						<li className="page-item me-3">
							<Link
								className={clsx(
									'page-link hadow-none border-0 d-flex justify-content-center',
									styles.paginationPage,
									styles.pageLink
								)}
								href="#"
								aria-label="Previous"
							>
								<span className="material-icons">keyboard_arrow_left</span>
							</Link>
						</li>
						<li className="page-item active me-2" aria-current="page">
							<Link
								className={clsx(
									'page-link shadow-none agination rounded-circle border-0 py-1 px-2 text-center',
									styles.paginationPage,
									styles.pageLink
								)}
								href="#"
							>
								1
							</Link>
						</li>
						<li className="page-item me-2">
							<Link
								className={clsx(
									'page-link shadow-none agination rounded-circle border-0 py-1 px-2 text-center',
									styles.paginationPage,
									styles.pageLink
								)}
								href="#"
							>
								2
							</Link>
						</li>
						<li className="page-item me-3">
							<Link
								className={clsx(
									'page-link shadow-none agination rounded-circle border-0 py-1 px-2 text-center',
									styles.paginationPage,
									styles.pageLink
								)}
								href="#"
							>
								3
							</Link>
						</li>
						<li className="page-item">
							<Link
								className={clsx(
									'page-link shadow-none border-0 d-flex justify-content-center',
									styles.paginationPage,
									styles.pageLink
								)}
								href="#"
								aria-label="Next"
							>
								<span className="material-icons">keyboard_arrow_right</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
export default ProductsSection
