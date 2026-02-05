import { clsx } from 'clsx'
import styles from './CartSection.module.scss'
import QuantitySelector from '@/components/input/QuantitySelector/QuantitySelector'
import { getCart, putCart, deleteCart } from '@/services/cart.api'
import { currency } from '@/utils/currency'

const CartSection = ({ cart, setCart }) => {
	const handleQuantityChange = async (cartItemId, newQty) => {
		setCart(prev => {
			const newCarts = prev.carts.map(item =>
				item.id === cartItemId ? { ...item, qty: newQty, total: item.product.price * newQty } : item
			)
			return {
				...prev,
				carts: newCarts,
				total: newCarts.reduce((sum, item) => sum + item.total, 0),
				finalTotal: newCarts.reduce((sum, item) => sum + item.total, 0),
			}
		})

		try {
			const response = await putCart({ product_id: cartItemId, qty: newQty })
			if (!response.success) {
				const updatedCart = await getCart()
				if (updatedCart.success) setCart(updatedCart)
			}
		} catch (error) {
			console.error(error)
		}
	}

	const handleDelete = async cartItemId => {
		setCart(prev => {
			const newCarts = prev.carts.filter(item => item.id !== cartItemId)
			return {
				...prev,
				carts: newCarts,
				total: newCarts.reduce((sum, item) => sum + item.total, 0),
				finalTotal: newCarts.reduce((sum, item) => sum + item.total, 0),
			}
		})

		try {
			const response = await deleteCart(cartItemId)
			if (!response.success) {
				console.error('Failed to delete cart item on server')
			}
			const updatedCart = await getCart()
			if (updatedCart.success) {
				setCart(prev => ({
					...prev,
					total: updatedCart.total,
					finalTotal: updatedCart.finalTotal,
				}))
			}
		} catch (error) {
			console.error('Delete cart item error:', error)
		}
	}
	return (
		<div className="py-8 py-lg-9">
			{/* 電腦樣式 */}
			<div className={clsx('d-none d-lg-block', styles.bg)}>
				<table className={clsx('table-borderless', styles.table)}>
					<thead>
						<tr>
							<th scope="col" style={{ width: '480px' }}>
								商品
							</th>
							<th scope="col" style={{ width: '192px' }}>
								數量
							</th>
							<th scope="col" style={{ width: '192px' }}>
								單價
							</th>
							<th scope="col" style={{ width: '192px' }}>
								小計
							</th>
							<th scope="col" style={{ width: '80px' }}>
								移除
							</th>
						</tr>
					</thead>
					<tbody>
						{cart.carts.map(cartItem => (
							<tr key={cartItem.id}>
								<th scope="row" className="d-flex align-items-center">
									<img
										src={cartItem.product.imageUrl}
										alt={cartItem.product.title}
										className="me-2 rounded-3 object-fit-cover"
										style={{ width: '60px', height: '60px' }}
									/>
									<span>{cartItem.product.title}</span>
								</th>

								<td>
									<QuantitySelector
										value={cartItem.qty}
										onChange={newValue => handleQuantityChange(cartItem.id, newValue)}
									/>
								</td>

								<td>NT$ {currency(cartItem.product.price)}</td>

								<td className="fw-bold">NT$ {currency(cartItem.total)}</td>

								<td>
									<button
										type="button"
										className={`material-icons border-0 ${styles.deleteBtn}`}
										onClick={() => handleDelete(cartItem.id)}
									>
										delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* 手機樣式 */}
			<div className="d-lg-none">
				{cart.carts.map(cartItem => (
					<div className={clsx('mb-6', styles.bg)} key={cartItem.id}>
						<div className="d-flex align-items-top mb-3">
							<img
								src={cartItem.product.imageUrl}
								alt={cartItem.product.title}
								className="me-3 rounded-3 object-fit-cover"
								style={{ width: '60px', height: '60px' }}
							/>

							<div className="flex-grow-1">
								<p className="h6 text-primary-400 mb-2">{cartItem.product.title}</p>

								<div className="d-flex align-items-center mb-2">
									<small className="text-gray-400 pe-4">單價</small>
									<span>NT$ {currency(cartItem.product.price)}</span>
								</div>

								<div className="d-flex align-items-center">
									<small className="text-gray-400 pe-4">小計</small>
									<span className="fw-bold">NT$ {currency(cartItem.total)}</span>
								</div>
							</div>

							<div>
								<button
									type="button"
									className={`material-icons text-danger border-0 bg-transparent ${styles.delete}`}
									onClick={() => handleDelete(cartItem.id)}
								>
									delete
								</button>
							</div>
						</div>

						<QuantitySelector
							value={cartItem.qty}
							onChange={newValue => handleQuantityChange(cartItem.id, newValue)}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default CartSection
