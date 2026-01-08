import ProductCard from './ProductCard'
import CartButton from '@/components/button/CartButton'
import CompareButton from '@/components/button/CompareButton'
import styles from './ProductCard.module.scss'
const TwoButtonCard = ({ ...productInfo }) => {
	return (
		<ProductCard
			{...productInfo}
			action={
				<div className={styles.buttonContainer}>
					<CompareButton />
					<CartButton />
				</div>
			}
		/>
	)
}

export default TwoButtonCard
