import BaseButton from './BaseButton'
import styles from './Button.module.scss'
const CartButton = ({ onClick, isLoading }) => {
  return (
    <BaseButton className={styles.cartButton} onClick={onClick} disabled={isLoading}>
      {isLoading ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          加入中...
        </>
      ) : (
        <h6>加入購物車</h6>
      )}
    </BaseButton>
  )
}

export default CartButton
