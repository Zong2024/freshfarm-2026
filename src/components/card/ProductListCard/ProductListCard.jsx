import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import CartButton from '@/components/button/CartButton'
import CompareButton from '@/components/button/CompareButton'
import styles from './ProductListCard.module.scss'
import leafIcon from '@/assets/images/leaf-icon.png'
const ProductListCard = ({
	farm,
	img,
	title,
	size,
	content,
	price,
	discount,
	slash,
	grams,
	showCompareButton,
}) => {
	return (
		<div
			className={clsx('card border-0 h-100 w-100 position-relative', styles.productCard)}
			style={{ maxWidth: '416px' }}
		>
			<div className="position-relative">
				<Link
					to="/products"
					type="button"
					className="fw-medium position-absolute top-0  badge rounded-pill bg-primary-100 text-primary fs-6 m-4 px-2 py-1 d-flex justify-content-center align-items-center z-2"
				>
					<img className="me-1" src={leafIcon} alt="安心認證icon圖示" />
					安心認證
				</Link>
				<img src={img} className="card-img-top" alt="商品圖片" />
				<button
					type="button"
					className="position-absolute bottom-0 end-0 border-0 rounded-circle bg-white p-3 m-4 z-2"
				>
					<span className="material-icons fs-2 d-block favorite-icon text-gray-400">
						favorite_border
					</span>
				</button>
			</div>

			<div className="card-body d-flex flex-column">
				<h6 className="text-primary-400 mb-1">{farm}</h6>
				<h5 className={`card-title fs-lg-${size} text-truncate`}>{title}</h5>
				<Link
					to="/products"
					className={clsx('card-text text-gray-300 mb-3 stretched-link', styles.multiLineTruncate)}
				>
					{content}
				</Link>
				<div className="mb-3 mt-auto">
					<span className=" fs-5 fw-bold text-secondary-300 ">{price}</span>
					<del className={`text-gray-300  ${discount == '' ? '' : 'ms-2'}`}>{discount}</del>
					<span className="mx-1 text-gray-300 ">{slash}</span>
					<span className="text-gray-300 ">{grams}</span>
				</div>

				<div className="d-flex gap-3 position-relative z-2">
					{showCompareButton && <CompareButton />}

					<CartButton />
				</div>
			</div>
		</div>
	)
}

export default ProductListCard
