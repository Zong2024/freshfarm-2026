import { clsx } from 'clsx'
import styles from './ProductCard.module.scss'
const ProductCard = ({ name, description, price, img, weight, action }) => {
	return (
		<div className={clsx('card h-100 overflow-hidden border-0', styles.cardShadow)}>
			<div className="position-relative">
				<img
					className="card-img-top object-fit-cover"
					src={img}
					alt=""
					style={{ height: '257px' }}
				/>
				<div className="position-absolute top-0 start-0">
					<span className="badge rounded-pill text-primary-400 bg-primary-100 pt-1 px-2 m-4  d-flex justify-content-center align-items-center">
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
					className="btn border-0 rounded-circle position-absolute bottom-0 end-0 m-4 p-2 bg-white"
				>
					<span className=" material-icons align-middle">favorite_border</span>
				</button>
			</div>
			<div className="card-body bg-white">
				<h5 className="fs-lg-4 mb-2">{name}</h5>
				<p className={clsx('fs-lg-5 mb-3 text-gray-300', styles.textTruncate)}>{description}</p>
				<p className="fs-5 fw-bold mb-3 text-secondary-300">
					NT$ {price} / {weight} g
				</p>
				<>{action}</>
			</div>
		</div>
	)
}

export default ProductCard
