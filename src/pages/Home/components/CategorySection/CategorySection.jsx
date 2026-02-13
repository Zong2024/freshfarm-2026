import SectionHeader from '../SectionHeader/SectionHeader'
import { clsx } from 'clsx'
import styles from './CategorySection.module.scss'
import { categoryInfo } from '@/constants/categoryInfo'

const CategorySection = () => {
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
					{categoryInfo.map(product => {
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
									<p className="fs-lg-5">{product.description}</p>
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
