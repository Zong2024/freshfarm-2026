import { clsx } from 'clsx'

const BaseButton = ({ children, className, ...props }) => {
	return (
		<button type="button" className={clsx('btn w-100', className)} {...props}>
			{children}
		</button>
	)
}

export default BaseButton
