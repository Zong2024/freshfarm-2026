import ProductCard from './ProductCard'
import CartButton from '@/components/button/CartButton'
import CompareButton from '@/components/button/CompareButton'
import styles from './ProductCard.module.scss'
const TwoButtonCard = ({ onAddCart, ...productInfo }) => {
	return (
		<ProductCard
			{...productInfo}
			action={
				<div className={styles.buttonContainer}>
					<CompareButton />
					<CartButton onClick={onAddCart} />
				</div>
			}
			page="productList"
		/>
	)
}

export default TwoButtonCard
