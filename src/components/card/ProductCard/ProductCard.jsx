import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import styles from './ProductCard.module.scss'
const ProductCard = ({
	name,
	origin,
	description,
	price,
	originPrice,
	img,
	quantifier,
	action,
	page,
}) => {
	return (
		<div className={clsx('card h-100 w-100 overflow-hidden border-0', styles.cardShadow)}>
			<div className="position-relative">
				<img
					className="card-img-top object-fit-cover"
					src={img}
					alt=""
					/* style={{ height: '257px' }} */
				/>
				<div className="position-absolute top-0 start-0">
					<span className="fs-6 badge rounded-pill text-primary-400 bg-primary-100 pt-1 px-2 m-4  d-flex justify-content-center align-items-center">
						<img
							className="me-1"
							src="https://github.com/Zong2024/freshfarm/blob/master/assets/icons/leaf-icon.png?raw=true"
							alt=""
						/>
						安心認證
					</span>
				</div>
				<button
					type="button"
					className="btn border-0 rounded-circle position-absolute bottom-0 end-0 m-4 p-3 bg-white z-2"
				>
					<span className="fs-2 text-gray-400 material-icons align-middle">favorite_border</span>
				</button>
			</div>
			<div className="card-body bg-white d-flex flex-column">
				{page === 'productList' && <h6 className="text-primary-400 mb-1">{origin}</h6>}
				<h5 className={clsx(' mb-2', page === 'home' ? 'fs-lg-4' : 'fs-lg-5')}>{name}</h5>
				<Link
					to="/"
					className={clsx('fs-lg-5 mb-3 text-gray-300 stretched-link', styles.textTruncate)}
				>
					{description}
				</Link>
				<div className="mb-3">
					<span className="fs-5 fw-bold text-secondary-300">NT$ {price}</span>
					<del className={`text-gray-300  ${originPrice == '' ? '' : 'ms-2'}`}>{originPrice}</del>
					<span className="mx-1 text-gray-300 ">/</span>
					<span className="text-gray-300 ">{quantifier}</span>
				</div>
				<>{action}</>
			</div>
		</div>
	)
}

export default ProductCard
