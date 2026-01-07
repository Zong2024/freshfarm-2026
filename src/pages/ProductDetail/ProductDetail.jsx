import { useState } from 'react'

import { clsx } from 'clsx'
import styles from './ProductDetail.module.scss'
import QuantitySelector from '@/components/input/QuantitySelector/QuantitySelector'

//img
import tap from './assets/tap.png'
import organic from './assets/taiwan_organic.jpg'
import farmer from './assets/farmer.png'

const ProductDetail = () => {
	const [buyCount, setBuyCount] = useState(1)
	return (
		<>
			<div className="container">
				<section className="row py-8 py-lg-9">
					<div className="col-12 col-lg-5 mb-4 mb-lg-0">
						<div className={styles.productGallery}>
							<div className={styles.mainImage}>
								<img
									src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=526&h526&auto=format"
									alt="麻豆大白柚"
								/>
							</div>
							<div className={styles.thumbnailList}>
								<div className={styles.thumbnail}>
									<img
										src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=120&h100&auto=format"
										alt=""
									/>
								</div>
								<div className={styles.thumbnail}>
									<img
										src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=120&h100&auto=format"
										alt=""
									/>
								</div>
								<div className={styles.thumbnail}>
									<img
										src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=120&h100&auto=format"
										alt=""
									/>
								</div>
								<div className={styles.thumbnail}>
									<img
										src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=120&h100&auto=format"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-7 ">
						<div className={styles.productInfo}>
							<div>
								<h2 className="fs-lg-1 mb-4">麻豆大白柚</h2>
								<div className={styles.textContent}>
									<p>產地：台南麻豆</p>
									<p>規格：6公斤裝 [4-6顆]</p>
									<div className={styles.verifiedInfo}>
										<p>檢驗報告：</p>
										<img src={tap} alt="檢驗標章" className={styles.verifiedBadge} />
										<img src={organic} alt="檢驗標章" className={styles.verifiedBadge} />
									</div>
								</div>
								<div className="d-flex">
									<h3 className="fs-lg-2 me-2 text-secondary-300">NT$ 950</h3>
									<span className="fs-lg-5 text-gray-300 text-decoration-line-through align-self-end">
										NT$ 760
									</span>
								</div>
							</div>

							<QuantitySelector value={buyCount} onChange={val => setBuyCount(val)} />
							<div className={styles.buttonContainer}>
								<button type="button" className={clsx('btn', styles.customButton1)}>
									<h6>
										加入比較
										<span className="material-icons  align-middle fs-6 ms-2">add_circle</span>
									</h6>
								</button>
								<button type="button" className={clsx('btn', styles.customButton2)}>
									<h6>
										加入購物車
										<span className="material-icons  align-middle fs-6 ms-2">shopping_cart</span>
									</h6>
								</button>
							</div>

							<div className="bg-secondary-50 py-4 px-6 rounded-1">
								<p>消費滿 NT $1,000，享有免運費優惠</p>
								<p>[付款] 貨到付款、ATM 轉帳</p>
								<p>[運送] 黑貓宅配、農場自取</p>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="container">
				<section className="row py-8 py-lg-9 gap-6 gap-lg-0">
					<div className="col-12 text-center mb-7 mb-lg-8">
						<h3 className="fs-lg-2">商品介紹</h3>
					</div>
					<div className="col-12 col-lg-6 ">
						<div className="bg-gray-50 p-6 rounded-4 h-100">
							<h4 className="text-primary-400 mb-4">【產地資訊】</h4>
							<h6 className="mb-2">麻豆大白柚的故鄉</h6>
							<ul className="list-unstyled vstack gap-1">
								<li>麻豆地區擁有得天獨厚的地理環境：</li>
								<li>氣候條件：亞熱帶氣候，日照充足</li>
								<li>土壤特性：肥沃的沖積土，排水良好</li>
								<li>栽培經驗：數十年專業種植技術</li>
								<li>品質認證：通過產銷履歷認證</li>
								<li>室溫保存：放置陰涼通風處，可保存2-3週</li>
								<li>冷藏保存：置於冰箱冷藏室，延長保鮮期至1個月</li>
								<li>避免：陽光直射、高溫潮濕環境</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-lg-6 ">
						<div className="bg-gray-50 p-6 rounded-4 h-100">
							<h4 className="text-primary-400 mb-4">【最佳保存方法】</h4>
							<h6 className="mb-2">麻豆大白柚的故鄉</h6>
							<ul className="list-unstyled vstack gap-1">
								<li>最佳賞味期：收到後2週內</li>
								<li>保存極限：適當 保存可達1個月</li>
								<li>建議：儘早食用，風味最佳</li>
							</ul>
							<h6 className="mb-2">食用小博士</h6>
							<ul className="list-unstyled vstack gap-1">
								<li>剝皮技巧：用刀在表皮劃十字，方便剝除</li>
								<li>食用時機：飯後1小時食用最佳</li>
								<li>搭配建議：可製作果汁、沙拉或直接食用</li>
							</ul>
						</div>
					</div>
				</section>
			</div>

			<div className={styles.farmerBg}>
				<div className="container">
					<section className="row justify-content-between py-8 py-lg-11">
						<div className="col-12 text-center mb-7 mb-lg-8">
							<h3 className="fs-lg-2">小農介紹</h3>
						</div>
						<div class="col-12 col-lg-4 align-self-center">
							<div className={styles.farmerImage}>
								<img src={farmer} alt="" />
							</div>
						</div>
						<div class="col-12 col-lg-7">
							<div className="p-4">
								<h6 className="fs-lg-4 mb-2">繼承父親四十年麻豆大白柚</h6>
								<h5 className="fs-lg-2 mb-3 mb-lg-6">兩代草生栽培珍惜土地</h5>
								<p className="fs-lg-5 mb-3 mb-lg-6">
									出自傑出農民世家之作！佳原的大白柚，在父親勇進時代，就被當成名人、官員指定的贈客禮品，也是懂柚子的老饕，絕對指名之作，匹敵老欉文旦。40年以上的老欉樹出產的大白柚表面油胞細緻，甘、甜、酸三味與水份都充沛，果肉厚實飽滿、晶瑩多汁，辭水之後口感更為柔和、甜度高。最讓人驚喜的是，每顆大白柚還有專屬秘密編號，每一盒中都能品嚐不同果樹的風味！
								</p>
								<p className="fs-lg-5">
									而堅持不使用高殘留、高毒性藥物，採收前五個月完全停藥，也是他們吸引眾多老客人的原因之一。減藥栽培讓大白柚多了些來自薊馬、銹蟎的吻痕，但全然不影響果物的口感風味，反倒是老天爺賜予的安心保證。
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default ProductDetail
