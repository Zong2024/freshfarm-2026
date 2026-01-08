import BaseButton from './BaseButton'
import styles from './Button.module.scss'
const CartButton = () => {
	return (
		<BaseButton className={styles.cartButton}>
			<h6>加入購物車</h6>
		</BaseButton>
	)
}

export default CartButton
