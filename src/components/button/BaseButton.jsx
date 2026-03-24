import { clsx } from 'clsx'

const BaseButton = ({ children, className, disabled, ...props }) => {
  return (
    <button type="button" className={clsx('btn w-100', className)} {...props} disabled={disabled}>
      {children}
    </button>
  )
}

export default BaseButton
