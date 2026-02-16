import { clsx } from 'clsx'
import styles from '../ProductCard/ProductCard.module.scss'

const SkeletonCard = () => {
	return (
		<div
			className={clsx('card h-100 w-100 overflow-hidden border-0', styles.cardShadow)}
			aria-hidden="true"
		>
			<div className="placeholder-glow">
				<div
					className="placeholder col-12 bg-secondary"
					style={{ aspectRatio: '1.4/1', width: '100%' }}
				></div>
			</div>
			<div className="card-body bg-white d-flex flex-column">
				<h6 className="placeholder-glow mb-1">
					<span className="placeholder col-4 bg-primary-100 opacity-50"></span>
				</h6>
				<h5 className="placeholder-glow mb-2">
					<span className="placeholder col-8"></span>
				</h5>
				<div className="placeholder-glow mb-3">
					<span className="placeholder col-12 mb-1"></span>
					<span className="placeholder col-10"></span>
				</div>
				<div className="placeholder-glow mb-3 d-flex align-items-center">
					<span
						className="placeholder col-5 me-2 bg-secondary-300 opacity-50"
						style={{ height: '28px' }}
					></span>
					<span className="placeholder col-2"></span>
				</div>
				<div className="placeholder-glow mt-auto">
					<span
						className="placeholder col-12 py-2 rounded-pill bg-primary"
						style={{ height: '46px' }}
					></span>
				</div>
			</div>
		</div>
	)
}

export default SkeletonCard
