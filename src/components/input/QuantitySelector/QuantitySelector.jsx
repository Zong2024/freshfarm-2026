import { clsx } from 'clsx'
import styles from './QuantitySelector.module.scss'
const QuantitySelector = ({ value = 1, max = 15, onChange, isLoading = false }) => {
	const isMinusDisabled = value <= 1
	const isPlusDisabled = value >= max

	//預留輸入編輯事件
	// const handleInputChange = e => {
	// 	const val = e.target.value
	// 	return val
	// }

	const handleUpdate = newValue => {
		let safeValue = Math.max(1, newValue)
		if (max) safeValue = Math.min(safeValue, max)

		if (safeValue !== value) {
			onChange(safeValue)
		}
	}

	return (
		<div className={styles.quantityContainer}>
			<button
				type="button"
				onClick={() => handleUpdate(value - 1)}
				disabled={isMinusDisabled || isLoading}
				className="btn border-0"
			>
				<span
					className={clsx(
						'material-icons  align-middle',
						isMinusDisabled ? 'text-gray-200' : 'text-primary-400'
					)}
				>
					remove
				</span>
			</button>
			<input
				type="number"
				value={value}
				// onChange={handleInputChange}
				className="form-control text-center border-0 p-0 mx-2"
				readOnly
			/>
			<button
				type="button"
				onClick={() => handleUpdate(value + 1)}
				disabled={isPlusDisabled || isLoading}
				className="btn border-0"
			>
				<span
					className={clsx(
						'material-icons  align-middle',
						isPlusDisabled ? 'text-gray-200' : 'text-primary-400'
					)}
				>
					add
				</span>
			</button>
		</div>
	)
}

export default QuantitySelector
