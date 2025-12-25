import { Link, NavLink } from 'react-router-dom'
import Card from '../components/Card'
import Compare from '../layouts/Compare'

const ProductList = () => {
	return (
		<main>
			{/*商品list*/}
			<section className="container py-8 py-lg-9">
				<div className="row">
					{/*分類欄*/}
					<div className="col-lg-3">
						{/*電腦樣式*/}
						<div className="d-none d-lg-block">
							<h1 className="fs-lg-4 pb-lg-12 border-1 border-primary-200 border-bottom">
								商品分類
							</h1>
							<ul className="nav flex-column">
								<li className="nav-item border-1 border-primary-200 border-bottom">
									<NavLink
										className="nav-link fs-5 classify py-3"
										aria-current="page"
										to="/products"
									>
										所有商品
									</NavLink>
								</li>
								<div className="accordion" id="accordionExample">
									{/*產地類別*/}
									<div className="accordion-item border-0">
										<div className="accordion-header" id="headingOne">
											<button
												className="accordion-button fs-5 classify border-1 border-primary-200 rounded-0 border-bottom px-3 d-flex justify-content-between align-items-center"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												產地
												<span className="material-icons text-primary arrow-down">
													keyboard_arrow_down
												</span>
											</button>
										</div>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											aria-labelledby="headingOne"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body bg-primary-100 p-0">
												<ul className="nav flex-column">
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-black px-4 py-3"
															to="/products"
														>
															北部
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-black px-4 py-3"
															to="/products"
														>
															中部
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-black px-4 py-3"
															to="/products"
														>
															南部
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-black px-4 py-3"
															href="/products"
														>
															東部
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-black px-4 py-3"
															to="/products"
														>
															離島
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									{/*季節類別*/}
									<div className="accordion-item border-0">
										<div className="accordion-header" id="headingTwo">
											<button
												className="accordion-button collapsed fs-5 classify border-1 border-primary-200 rounded-0 border-bottom px-3 d-flex justify-content-between align-items-center"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo"
											>
												季節
												<span className="material-icons text-primary arrow-down">
													keyboard_arrow_down
												</span>
											</button>
										</div>
										<div
											id="collapseTwo"
											className="accordion-collapse collapse"
											aria-labelledby="headingTwo"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body bg-primary-100 p-0">
												<ul className="nav flex-column">
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-black px-4 py-3"
															to="/products"
														>
															春季(3~5月)
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-black px-4 py-3"
															to="/products"
														>
															夏季(6~8月)
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-black px-4 py-3"
															to="/products"
														>
															秋季(9~11月)
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-black px-4 py-3"
															to="/products"
														>
															冬季(12~2月)
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-black px-4 py-3"
															to="/products"
														>
															全年
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<li className="nav-item border-1 border-bottom border-primary-200">
									<Link className="nav-link fs-5 classify px-3 py-4" to="/products">
										有機認證
									</Link>
								</li>
							</ul>
						</div>

						{/*手機樣式*/}
						<div className="dropdown d-lg-none d-block" data-bs-auto-close="outside">
							<NavLink
								className="btn w-100 border-gray-200 border-2 text-gray-300 dropdown-toggle mb-4 d-flex justify-content-between align-items-center"
								to="/products"
								role="button"
								id="dropdownMenuLink"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								商品分類
								<span className="material-icons text-primary">keyboard_arrow_down</span>
							</NavLink>

							<ul
								className="dropdown-menu mt-1 p-4 flex-column w-100 border-1 border-primary-200 bg-white rounded-3"
								aria-labelledby="dropdownMenuLink"
							>
								<li className="nav-item mb-2">
									<NavLink
										className="nav-link fs-6 classify p-1"
										aria-current="page"
										to="/products"
									>
										所有商品
									</NavLink>
								</li>
								<div className="accordion" id="accordionExample">
									{/*產地類別*/}
									<div className="accordion-item border-0 mb-2">
										<div className="accordion-header" id="headingOne">
											<button
												className="accordion-button fs-6 classify rounded-0 p-1 mb-1 justify-content-between align-items-center"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												產地
												<span className="material-icons text-primary arrow-down">
													keyboard_arrow_down
												</span>
											</button>
										</div>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											aria-labelledby="headingOne"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body p-0">
												<ul className="nav flex-column">
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-primary px-4 py-2"
															to="/products"
														>
															北部
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-primary px-4 py-2"
															to="/products"
														>
															中部
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-primary px-4 py-2"
															to="/products"
														>
															南部
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-primary px-4 py-2"
															to="/products"
														>
															東部
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-primary px-4 py-2"
															to="/products"
														>
															離島
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									{/*季節類別*/}
									<div className="accordion-item border-0 mb-2">
										<div className="accordion-header" id="headingTwo">
											<button
												className="accordion-button fs-6 classify rounded-0 p-1 mb-1 justify-content-between align-items-center"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo"
											>
												季節
												<span className="material-icons text-primary arrow-down">
													keyboard_arrow_down
												</span>
											</button>
										</div>
										<div
											id="collapseTwo"
											className="accordion-collapse collapse"
											aria-labelledby="headingTwo"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body p-0">
												<ul className="nav flex-column">
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-primary px-4 py-2"
															to="/productsproducts"
														>
															春季(3~5月)
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-primary px-4 py-2"
															to="/products"
														>
															夏季(6~8月)
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-primary px-4 py-2"
															to="/products"
														>
															秋季(9~11月)
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-primary px-4 py-2"
															to="/products"
														>
															冬季(12~2月)
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link classify-subitem text-primary px-4 py-2"
															to="/products"
														>
															全年
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<li className="nav-item">
									<Link className="nav-link fs-6 classify p-1" to="/products">
										有機認證
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-9">
						{/*商品搜尋欄*/}
						<div className="position-relative mb-7 mb-lg-8">
							<input type="text" className="form-control shadow-none" placeholder="搜尋商品名稱" />
							<span className="material-icons position-absolute text-primary product-search-bar align-bottom">
								search
							</span>
						</div>
						{/*商品list*/}
						<div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-3 mb-8">
							<div className="col mb-6 mb-xxl-7 d-flex justify-content-center">
								<Card
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
								<Card
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
								<Card
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
								<Card
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
								<Card
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
								<Card
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
								<Card
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
								<Card
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
								<Card
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
								<Card
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
								<ul className="pagination justify-content-center">
									<li className="page-item me-3">
										<Link
											className="page-link shadow-none pagination-page border-0 d-flex justify-content-center"
											href="#"
											aria-label="Previous"
										>
											<span className="material-icons">keyboard_arrow_left</span>
										</Link>
									</li>
									<li className="page-item active me-2" aria-current="page">
										<Link
											className="page-link shadow-none pagination-page agination rounded-circle border-0 py-1 px-2 text-center"
											href="#"
										>
											1
										</Link>
									</li>
									<li className="page-item me-2">
										<Link
											className="page-link shadow-none pagination-page agination rounded-circle border-0 py-1 px-2 text-center"
											href="#"
										>
											2
										</Link>
									</li>
									<li className="page-item me-3">
										<Link
											className="page-link shadow-none pagination-page agination rounded-circle border-0 py-1 px-2 text-center"
											href="#"
										>
											3
										</Link>
									</li>
									<li className="page-item">
										<Link
											className="page-link shadow-none pagination-page border-0 d-flex justify-content-center"
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
				</div>
			</section>

			<Compare nonCompare={false} showCompareArea={true} />
		</main>
	)
}

export default ProductList
