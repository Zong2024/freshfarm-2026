import BaseButton from './BaseButton'
import styles from './Button.module.scss'
const CompareButton = () => {
	return (
		<BaseButton className={styles.compareButton}>
			<h6>加入比較</h6>
		</BaseButton>
	)
}

export default CompareButton
