import { clsx } from 'clsx'
import styles from './StepperSection.module.scss'

const StepperSection = ({ step }) => {
  return (
    <div className={styles.step}>
      <div className={styles.stepItem}>
        <div className={clsx(styles.stepCircle, { [styles.active]: step >= 1 })}>1</div>
        <p className={styles.stepText}>購物車</p>
      </div>
      <div className={styles.stepLine}></div>
      <div className={styles.stepItem}>
        <div className={clsx(styles.stepCircle, { [styles.active]: step >= 2 })}>2</div>
        <p className={styles.stepText}>選擇配送與付款方式</p>
      </div>
      <div className={styles.stepLine}></div>
      <div className={styles.stepItem}>
        <div className={clsx(styles.stepCircle, { [styles.active]: step >= 3 })}>3</div>
        <p className={styles.stepText}>提交訂單與付款</p>
      </div>
    </div>
  )
}

export default StepperSection
