import { Link, NavLink } from 'react-router-dom'
import { clsx } from 'clsx'
import styles from './ProductCategory.module.scss'
const ProductCategory = () => {
	return (
		<div className="col-lg-3">
			{/*電腦樣式*/}
			<div className="d-none d-lg-block">
				<h1 className="fs-lg-4 pb-lg-12 border-1 border-primary-200 border-bottom">商品分類</h1>
				<ul className="nav flex-column">
					<li className="nav-item border-1 border-primary-200 border-bottom">
						<NavLink
							className={clsx('nav-link fs-5 py-3', styles.classify)}
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
									className={clsx(
										'accordion-button fs-5 border-1 border-primary-200 rounded-0 border-bottom px-3 d-flex justify-content-between align-items-center',
										styles.accordionButton,
										styles.classify
									)}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									產地
									<span className={clsx('material-icons text-primary', styles.arrowDown)}>
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
												className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
												to="/products"
											>
												北部
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
												to="/products"
											>
												中部
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
												to="/products"
											>
												南部
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
												href="/products"
											>
												東部
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
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
									className={clsx(
										'accordion-button collapsed fs-5 border-1 border-primary-200 rounded-0 border-bottom px-3 d-flex justify-content-between align-items-center',
										styles.accordionButton,
										styles.collapsed,
										styles.classify
									)}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									季節
									<span className={clsx('material-icons text-primary', styles.arrowDown)}>
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
												className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
												to="/products"
											>
												春季(3~5月)
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
												to="/products"
											>
												夏季(6~8月)
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
												to="/products"
											>
												秋季(9~11月)
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
												to="/products"
											>
												冬季(12~2月)
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
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
						<Link className={clsx('nav-link fs-5 px-3 py-4', styles.classify)} to="/products">
							有機認證
						</Link>
					</li>
				</ul>
			</div>

			{/*手機樣式*/}
			<div className="dropdown d-lg-none d-block" data-bs-auto-close="outside">
				<NavLink
					className={clsx(
						'btn w-100 border-gray-200 border-2 text-gray-300 dropdown-toggle mb-4 d-flex justify-content-between align-items-clearInterval',
						styles.dropdownToggle
					)}
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
							className={clsx('nav-link fs-6 p-1', styles.classify)}
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
									className={clsx(
										'accordion-button fs-6 rounded-0 p-1 mb-1 justify-content-between align-items-center',
										styles.accordionButton,
										styles.classify
									)}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									產地
									<span className={clsx('material-icons text-primary', styles.arrowDown)}>
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
												className="nav-link classifySubitem text-primary px-4 py-2"
												to="/products"
											>
												北部
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link classifySubitem text-primary px-4 py-2"
												to="/products"
											>
												中部
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link classifySubitem text-primary px-4 py-2"
												to="/products"
											>
												南部
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link classifySubitem text-primary px-4 py-2"
												to="/products"
											>
												東部
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link classifySubitem text-primary px-4 py-2"
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
									className={clsx(
										'accordion-button fs-6 classify rounded-0 p-1 mb-1 justify-content-between align-items-center',
										styles.accordionButton
									)}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									季節
									<span className={clsx('material-icons text-primary', styles.arrowDown)}>
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
												className="nav-link classifySubitem text-primary px-4 py-2"
												to="/productsproducts"
											>
												春季(3~5月)
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link classifySubitem text-primary px-4 py-2"
												to="/products"
											>
												夏季(6~8月)
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link classifySubitem text-primary px-4 py-2"
												to="/products"
											>
												秋季(9~11月)
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link classifySubitem text-primary px-4 py-2"
												to="/products"
											>
												冬季(12~2月)
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link classifySubitem text-primary px-4 py-2"
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
	)
}

export default ProductCategory
