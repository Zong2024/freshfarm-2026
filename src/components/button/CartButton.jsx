import BaseButton from './BaseButton'
import styles from './Button.module.scss'
const CartButton = ({ onClick }) => {
	return (
		<BaseButton className={styles.cartButton} onClick={onClick}>
			<h6>加入購物車</h6>
		</BaseButton>
	)
}

export default CartButton
