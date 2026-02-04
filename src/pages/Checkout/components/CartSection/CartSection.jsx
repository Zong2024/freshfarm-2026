import { clsx } from 'clsx'
import styles from './CartSection.module.scss'
import { useEffect, useState } from 'react'
import QuantitySelector from '@/components/input/QuantitySelector/QuantitySelector'
import { getCart, putCart, deleteCart } from '@/services/cart.api'

const CartSection = () => {
	const [cartItems, setCartItems] = useState([])

	useEffect(() => {
		const fetchCart = async () => {
			const result = await getCart()
			if (result.success) {
				setCartItems(result.carts)
			}
		}
		fetchCart()
	}, [])

	const handleQuantityChange = async (cartItemId, newQty) => {
		const result = await putCart({
			product_id: cartItemId,
			qty: newQty,
		})

		if (result.success) {
			setCartItems(prev =>
				prev.map(item => (item.id === cartItemId ? { ...item, qty: newQty } : item))
			)
		}
	}

	const handleDelete = async cartItemId => {
		const result = await deleteCart(cartItemId)
		if (result.success) {
			setCartItems(prev => prev.filter(item => item.id !== cartItemId))
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
						{cartItems.map(cartItem => {
							const { product, qty } = cartItem
							return (
								<tr key={cartItem.id}>
									<th scope="row" className="d-flex align-items-center">
										<img
											src={product.imageUrl}
											alt={product.title}
											className="me-2 rounded-3"
											style={{ width: '60px' }}
										/>
										<span>{product.title}</span>
									</th>

									<td>
										<QuantitySelector
											value={qty}
											onChange={newValue => handleQuantityChange(cartItem.id, newValue)}
										/>
									</td>

									<td>NT$ {product.price.toLocaleString()}</td>

									<td className="fw-bold">NT$ {(product.price * qty).toLocaleString()}</td>

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
							)
						})}
					</tbody>
				</table>
			</div>

			{/* 手機樣式 */}
			<div className="d-lg-none">
				{cartItems.map(cartItem => {
					const { product, qty, id } = cartItem
					return (
						<div className={clsx('mb-6', styles.bg)} key={id}>
							<div className="d-flex align-items-top mb-3">
								<img
									src={product.imageUrl}
									alt={product.title}
									className="me-3 rounded-3"
									style={{ width: '60px', height: '60px' }}
								/>

								<div className="flex-grow-1">
									<p className="h6 text-primary-400 mb-2">{product.title}</p>

									<div className="d-flex align-items-center mb-2">
										<small className="text-gray-400 pe-4">單價</small>
										<span>NT$ {product.price.toLocaleString()}</span>
									</div>

									<div className="d-flex align-items-center">
										<small className="text-gray-400 pe-4">小計</small>
										<span className="fw-bold">NT$ {(product.price * qty).toLocaleString()}</span>
									</div>
								</div>

								<button
									type="button"
									className={`material-icons text-danger border-0 bg-transparent ${styles.delete}`}
									onClick={() => handleDelete(id)}
								>
									delete
								</button>
							</div>

							<QuantitySelector
								value={qty}
								onChange={newValue => handleQuantityChange(id, newValue)}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default CartSection
