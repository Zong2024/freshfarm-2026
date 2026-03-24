import { getProduct } from '@/services/product.api'
import BaseButton from './BaseButton'
import styles from './Button.module.scss'
import { useCompare } from '@/contexts/CompareContext'
const CompareButton = ({ product }) => {
  const { comparedItems, addCompare, isFull } = useCompare()
  const alreadyAdded = comparedItems.some(item => item.id === product.id)
  const disabled = alreadyAdded || (isFull && !alreadyAdded)
  const handleCompare = async () => {
    if (isFull) return
    const res = await getProduct(product.id)

    if (res.success) {
      addCompare(res.product)
    } else {
      console.error('加入比較失敗:', res.error)
    }
  }
  return (
    <BaseButton className={styles.compareButton} onClick={handleCompare} disabled={disabled}>
      <h6>{alreadyAdded ? '已加入比較' : '加入比較'}</h6>
    </BaseButton>
  )
}

export default CompareButton
