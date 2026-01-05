import styles from './FeatureCard.module.scss'

const FeatureCard = ({ img, title, content }) => {
	return (
		<div className={styles.featureCard}>
			<div className={styles.featureCardImg}>
				<img src={img} alt="" />
			</div>
			<div className="text-center">
				<h5 className="title text-primary-400 mb-4">{title}</h5>
				<p className="text-gray-400">{content}</p>
			</div>
		</div>
	)
}

export default FeatureCard
