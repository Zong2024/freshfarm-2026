import BaseButton from './BaseButton'
import styles from './Button.module.scss'
const CartButton = () => {
	return <BaseButton className={styles.cartButton}>加入購物車</BaseButton>
}

export default CartButton
