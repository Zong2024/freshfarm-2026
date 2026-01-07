import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import ProductListCard from '@/components/card/ProductListCard/ProductListCard'
import styles from './ProductsSection.module.scss'
const ProductsSection = () => {
	return (
		<div className="col-lg-9">
			{/*商品搜尋欄*/}
			<div className="position-relative mb-7 mb-lg-8">
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
				<div className="col mb-6 mb-xxl-7 d-flex justify-content-center">
					<ProductListCard
						farm="麻豆柚香園"
						img="product/product-image-麻豆柚子"
						title="麻豆大白柚"
						size="5"
						content="來自台南麻豆的優質大白柚，果肉飽滿、汁多清甜、微酸爽口，天然無毒栽培，皮薄肉厚，每一口都吃得到自然的好味道。中秋送禮、自用兩相宜，讓您品嚐最純粹的台灣在地風味。"
						price="NT$ 950"
						discount="NT$ 1060"
						slash="/"
						grams="6公斤裝"
						showCompareButton={true}
					/>
				</div>
				<div className="col mb-6 mb-xxl-7 d-flex justify-content-center">
					<ProductListCard
						farm="古樂農場"
						img="product/product-image-荔枝"
						title="嚴選大樹老欉玉荷包"
						size="5"
						content="玉荷包、黑葉等品種在夏季上市，果肉Q彈甜中帶酸，風玉荷包、黑葉等玉荷包、黑葉等品種在夏季上市，果肉Q彈甜中帶酸，風玉荷包、黑葉等"
						price="NT$ 683"
						discount="NT$ 729"
						slash="/"
						grams="600g"
						showCompareButton={true}
					/>
				</div>
				<div className="col mb-6 mb-xxl-7 d-flex justify-content-center">
					<ProductListCard
						farm="農芒"
						img="product/product-image-綠竹筍"
						title="有機綠竹筍(特級)4台"
						size="5"
						content="夏季是綠竹筍的產季口感清甜、脆嫩無論涼拌、煮湯都美夏季是綠竹筍的產季口感清甜、脆嫩無論涼拌、煮湯都美夏季是綠竹筍的產季口感清甜、脆嫩無論涼拌、煮湯都美"
						price="NT$ 790"
						discount=""
						slash="/"
						grams="500g"
						showCompareButton={true}
					/>
				</div>
				<div className="col mb-6 mb-xxl-7 d-flex justify-content-center">
					<ProductListCard
						farm="無花果農場"
						img="product/product-image-水蜜桃"
						title="拉拉山洪家水蜜桃"
						size="5"
						content="水蜜桃主要產於高山地區，因為氣候涼爽、日夜溫差大，使得果實能慢慢成熟，累積出豐富的甜度與香氣。其果肉細緻柔嫩，色澤粉嫩誘人，咬下一口時多汁滑順，帶有獨特的清甜芳香。"
						price="NT$ 710"
						discount="NT$ 760"
						slash="/"
						grams="800g"
						showCompareButton={true}
					/>
				</div>
				<div className="col mb-6 mb-xxl-7 d-flex justify-content-center d-none">
					<ProductListCard
						farm="紅奇有機農場"
						img="product/product-image-青花菜"
						title="無毒青花菜"
						size="5"
						content="清脆鮮甜，適合快炒或川燙，富含膳食纖維"
						price="NT$ 79"
						discount=""
						slash="/"
						grams="300g"
						showCompareButton={true}
					/>
				</div>
				<div className="col mb-6 mb-xxl-7 d-flex justify-content-center">
					<ProductListCard
						farm="竹塘鄉農會"
						img="product/product-image-豬肉片"
						title="黑豬梅花火鍋片"
						size="5"
						content="油花均勻、口感滑嫩，火鍋與炒菜皆適宜"
						price="NT$ 468"
						discount=""
						slash="/"
						grams="300g"
						showCompareButton={true}
					/>
				</div>
				<div className="col mb-6 mb-xxl-7 d-flex justify-content-center">
					<ProductListCard
						farm="古樂農場"
						img="product/product-image-香米"
						title="屏東香米"
						size="5"
						content="口感Q彈、米香濃，是每日主食的安心選擇"
						price="NT$ 103"
						discount="NT$ 115"
						slash="/"
						grams="1500g"
						showCompareButton={true}
					/>
				</div>
				<div className="col mb-6 mb-xxl-0 d-flex justify-content-center">
					<ProductListCard
						farm="以拉西代"
						img="product/product-image-放牧土雞蛋"
						title="放牧土雞蛋"
						size="5"
						content="蛋黃濃郁自然橘紅，無抗生素殘留"
						price="NT$ 115"
						discount="NT$ 130"
						slash="/"
						grams="10顆"
						showCompareButton={true}
					/>
				</div>
				<div className="col mb-6 mb-xxl-0 d-flex justify-content-center">
					<ProductListCard
						farm="AphineBro高山兄弟"
						img="product/product-image-牛番茄"
						title="牛番茄（大果）"
						size="5"
						content="多汁微酸，適合涼拌、燉煮"
						price="NT$ 142"
						discount=""
						slash="/"
						grams="500g"
						showCompareButton={true}
					/>
				</div>
				<div className="col mb-6 mb-xxl-0 d-flex justify-content-center">
					<ProductListCard
						farm="保證責任雲林縣永光果菜生產合作社"
						img="product/product-image-高麗菜"
						title="小農高麗菜"
						size="5"
						content="脆甜飽滿，適合清炒、煮湯、滷煮"
						price="NT$ 79"
						discount=""
						slash="/"
						grams="1,000g"
						showCompareButton={true}
					/>
				</div>
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
