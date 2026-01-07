import { clsx } from 'clsx'
import styles from './Compare.module.scss'
const Compare = ({ nonCompare, showCompareArea }) => {
	return (
		<section className={clsx('bg-primary-50 py-8 py-lg-9', styles.compareBg)}>
			<div className="container">
				<div className="d-flex justify-content-center align-items-center gap-2 mb-7 mb-lg-8">
					<h2 className="fs-4 fs-lg-2">商品比較</h2>
					<span className="material-icons text-primary fs-lg-2 align-bottom">info</span>
				</div>
				{nonCompare && (
					<div className="bg-white p-5">
						<h4 className="fs-6 fs-lg-3 py-6 px-3 text-gray-300 text-center">
							您尚未選擇任何商品來進行比較
						</h4>
					</div>
				)}
			</div>

			{showCompareArea && (
				<>
					<div className={clsx('container bg-white', styles.tableShadow)}>
						<div className="p-5 d-none d-md-block">
							<div className="d-flex flex-row-reverse mb-6">
								<button
									type="button"
									className="btn btn-gray-100 border-1 border-gray-200 fs-6 fw-bold px-6"
								>
									一鍵清空比較
								</button>
							</div>

							<table
								className="table table-borderless text-center"
								style={{ tableLayout: 'fixed' }}
							>
								<thead>
									<tr className={styles.tableSecondar50}>
										<th scope="col" className="text-gray-400 align-middle">
											項目
										</th>
										<th
											scope="col"
											className="d-flex align-items-center justify-content-center text-primary py-3"
										>
											放牧雞蛋（有機）
											<span className="material-icons text-danger align-bottom ms-2">
												remove_circle
											</span>
										</th>
										<th scope="col" className="text-primary py-3 align-middle">
											土雞蛋（推薦）
											<span className="material-icons text-danger align-bottom ms-2">
												remove_circle
											</span>
										</th>
										<th scope="col" className="text-primary py-3 align-middle">
											禽舍蛋（平飼 )
											<span className="material-icons text-danger align-bottom ms-2">
												remove_circle
											</span>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
											商品圖片
										</th>
										<td className="py-6">
											<img
												className="rounded-3 w-100"
												src="/public/assets/images/product/product-comparison-Image-放牧雞蛋.jpg"
												alt="放牧雞蛋圖片"
											/>
										</td>
										<td className="py-6">
											<img
												className="rounded-3 w-100"
												src="/public/assets/images/product/product-comparison-Image-土雞蛋.jpg"
												alt="土雞蛋圖片"
											/>
										</td>
										<td className="py-6">
											<img
												className="rounded-3 w-100"
												src="/public/assets/images/product/product-comparison-Image-禽舍蛋.jpg"
												alt="禽舍蛋圖片"
											/>
										</td>
									</tr>
									<tr>
										<th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
											價格
										</th>
										<td className="py-6">NT$ 120</td>
										<td className="py-6">NT$ 100</td>
										<td className="py-6">NT$ 90</td>
									</tr>
									<tr>
										<th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
											產地
										</th>
										<td className="py-6">苗栗南庄(中部)</td>
										<td className="py-6">彰化田尾(中部)</td>
										<td className="py-6">雲林斗六(中部)</td>
									</tr>
									<tr>
										<th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
											認證標章
										</th>
										<td className="py-6">有機認證</td>
										<td className="py-6">產銷履歷</td>
										<td className="py-6">--</td>
									</tr>
									<tr>
										<th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
											保存方式
										</th>
										<td className="py-6">冷藏</td>
										<td className="py-6">常溫保存（7 天內食用）</td>
										<td className="py-6">冷藏</td>
									</tr>
									<tr>
										<th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
											推薦用途
										</th>
										<td className="py-6">水煮、生食、拌飯</td>
										<td className="py-6">煎蛋、日式玉子燒</td>
										<td className="py-6">炒蛋、烘焙用</td>
									</tr>
									<tr>
										<th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
											操作
										</th>
										<td className="py-6">
											<button
												type="button"
												className="btn btn-primary-300 fw-bold text-white w-100"
											>
												加入購物車
											</button>
										</td>
										<td className="py-6">
											<button
												type="button"
												className="btn btn-primary-300 fw-bold text-white w-100"
											>
												加入購物車
											</button>
										</td>
										<td className="py-6">
											<button
												type="button"
												className="btn btn-primary-300 fw-bold text-white w-100"
											>
												加入購物車
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="container">
						{/*手機樣式*/}
						<div className="d-block d-md-none">
							<div className="card border-0 p-3 cardShadow mb-6">
								<div className="d-flex justify-content-between mb-2">
									<h5 className="fs-6 text-primary">放牧雞蛋（有機）</h5>
									<span className="material-icons text-danger align-bottom ms-2">
										remove_circle
									</span>
								</div>
								<div className="d-flex align-items-center mb-2">
									<img
										className={clsx('rounded-3 me-2', styles.compareMobileImg)}
										src="/public/assets/images/product/product-comparison-mobile-Image-放牧雞蛋.jpg"
										alt="放牧雞蛋圖片"
									/>
									<div>
										<div className="d-flex mb-1 align-items-center gap-1">
											<span className="material-icons fs-6 text-gray-300">attach_money</span>
											<p>NT$ 120</p>
										</div>
										<div className="d-flex align-items-center gap-1">
											<span className="material-icons fs-6 text-gray-300">location_on</span>
											<p>苗栗南庄(中部)</p>
										</div>
									</div>
								</div>

								<div className="card-body p-0">
									<ul className="list-unstyled mb-2">
										<li className="mb-2">
											<span className="fs-8 text-gray-400 me-4">認證標章</span>
											<span>有機認證</span>
										</li>
										<li className="mb-2">
											<span className="fs-8 text-gray-400 me-4">保存方式</span>
											<span>冷藏</span>
										</li>
										<li>
											<span className="fs-8 text-gray-400 me-4">推薦用途</span>
											<span>水煮、生食、拌飯</span>
										</li>
									</ul>
									<button type="button" className="btn btn-primary-300 fw-bold text-white w-100">
										加入購物車
									</button>
								</div>
							</div>
							<div className="card border-0 p-3 cardShadow mb-6">
								<div className="d-flex justify-content-between mb-2">
									<h5 className="fs-6 text-primary">土雞蛋（推薦）</h5>
									<span className="material-icons text-danger align-bottom ms-2">
										remove_circle
									</span>
								</div>
								<div className="d-flex align-items-center mb-2">
									<img
										className={clsx('rounded-3 me-2', styles.compareMobileImg)}
										src="/public/assets/images/product/product-comparison-mobile-Image-土雞蛋.jpg"
										alt="土雞蛋圖片"
									/>
									<div>
										<div className="d-flex mb-1 align-items-center gap-1">
											<span className="material-icons fs-6 text-gray-300">attach_money</span>
											<p>NT$ 100</p>
										</div>
										<div className="d-flex align-items-center gap-1">
											<span className="material-icons fs-6 text-gray-300">location_on</span>
											<p>彰化田尾(中部)</p>
										</div>
									</div>
								</div>

								<div className="card-body p-0">
									<ul className="list-unstyled mb-2">
										<li className="mb-2">
											<span className="fs-8 text-gray-400 me-4">認證標章</span>
											<span>產銷履歷</span>
										</li>
										<li className="mb-2">
											<span className="fs-8 text-gray-400 me-4">保存方式</span>
											<span>常溫保存（7 天內食用）</span>
										</li>
										<li>
											<span className="fs-8 text-gray-400 me-4">推薦用途</span>
											<span>煎蛋、日式玉子燒</span>
										</li>
									</ul>
									<button type="button" className="btn btn-primary-300 fw-bold text-white w-100">
										加入購物車
									</button>
								</div>
							</div>
							<div className="card border-0 p-3 cardShadow mb-6">
								<div className="d-flex justify-content-between mb-2">
									<h5 className="fs-6 text-primary">禽舍蛋（平飼 )</h5>
									<span className="material-icons text-danger align-bottom ms-2">
										remove_circle
									</span>
								</div>
								<div className="d-flex align-items-center mb-2">
									<img
										className={clsx('rounded-3 me-2', styles.compareMobileImg)}
										src="/public/assets/images/product/product-comparison-mobile-Image-禽舍蛋.jpg"
										alt="禽舍蛋圖片"
									/>
									<div>
										<div className="d-flex mb-1 align-items-center gap-1">
											<span className="material-icons fs-6 text-gray-300">attach_money</span>
											<p>NT$ 90</p>
										</div>
										<div className="d-flex align-items-center gap-1">
											<span className="material-icons fs-6 text-gray-300">location_on</span>
											<p>雲林斗六(中部)</p>
										</div>
									</div>
								</div>

								<div className="card-body p-0">
									<ul className="list-unstyled mb-2">
										<li className="mb-2">
											<span className="fs-8 text-gray-400 me-4">認證標章</span>
											<span>--</span>
										</li>
										<li className="mb-2">
											<span className="fs-8 text-gray-400 me-4">保存方式</span>
											<span>冷藏</span>
										</li>
										<li>
											<span className="fs-8 text-gray-400 me-4">推薦用途</span>
											<span>炒蛋、烘焙用</span>
										</li>
									</ul>
									<button type="button" className="btn btn-primary-300 fw-bold text-white w-100">
										加入購物車
									</button>
								</div>
							</div>
							<button
								type="button"
								className="btn btn-gray-100 border-1 border-gray-200 fw-bold w-100"
							>
								一鍵清空比較
							</button>
						</div>
					</div>
				</>
			)}
		</section>
	)
}

export default Compare
