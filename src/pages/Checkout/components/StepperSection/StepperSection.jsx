import { clsx } from 'clsx'
import styles from './StepperSection.module.scss'

const StepperSection = () => {
	return (
		<div className={styles.step}>
			<div className={styles.stepItem}>
				<div className={clsx(styles.stepCircle, styles.active)}>1</div>
				<p className={styles.stepText}>確認訂單明細</p>
			</div>
			<div className={styles.stepLine}></div>
			<div className={styles.stepItem}>
				<div className={styles.stepCircle}>2</div>
				<p className={styles.stepText}>選擇付款方式</p>
			</div>
			<div className={styles.stepLine}></div>
			<div className={styles.stepItem}>
				<div className={styles.stepCircle}>3</div>
				<p className={styles.stepText}>完成訂購</p>
			</div>
		</div>
	)
}

export default StepperSection
