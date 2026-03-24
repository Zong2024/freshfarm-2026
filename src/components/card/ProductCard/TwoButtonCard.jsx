import ProductCard from './ProductCard'
import CartButton from '@/components/button/CartButton'
import CompareButton from '@/components/button/CompareButton'
import styles from './ProductCard.module.scss'
const TwoButtonCard = ({ isLoading, onAddCart, ...productInfo }) => {
  return (
    <ProductCard
      {...productInfo}
      action={
        <div className={styles.buttonContainer}>
          <CompareButton product={productInfo} />
          <CartButton onClick={onAddCart} isLoading={isLoading} />
        </div>
      }
      page="productList"
    />
  )
}

export default TwoButtonCard
