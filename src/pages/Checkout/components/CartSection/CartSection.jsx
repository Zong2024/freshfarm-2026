import Table from '@/components/table/Table'
import QuantitySelector from '@/components/input/QuantitySelector/QuantitySelector'
import styles from './CartSection.module.scss'
import { useCart } from '@/context/cartContext'
import { currency } from '@/utils/currency'
import { clsx } from 'clsx'

const CartSection = () => {
	const { cart, updateCartItem, removeCartItem } = useCart()

	const columns = [
		{ key: 'product', title: '商品', width: '480px' },
		{ key: 'qty', title: '數量', width: '192px' },
		{ key: 'price', title: '單價', width: '192px' },
		{ key: 'total', title: '小計', width: '192px' },
		{ key: 'remove', title: '移除', width: '80px' },
	]

	const handleQuantityChange = async (id, qty) => {
		await updateCartItem(id, qty)
	}

	const handleDelete = async id => {
		await removeCartItem(id)
	}

	const renderRow = (cartItem, isMobile = false) => {
		if (!isMobile) {
			return (
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
							onChange={newQty => handleQuantityChange(cartItem.id, newQty)}
						/>
					</td>
					<td>NT$ {currency(cartItem.product.price)}</td>
					<td className="fw-bold">NT$ {currency(cartItem.total)}</td>
					<td>
						<button
							type="button"
							className={clsx('material-icons border-0', styles.deleteBtn)}
							onClick={() => handleDelete(cartItem.id)}
						>
							delete
						</button>
					</td>
				</tr>
			)
		} else {
			// 手機版
			return (
				<div className={clsx('mb-6 bg-white p-3 rounded-3', styles.shadow)} key={cartItem.id}>
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
								className="material-icons text-danger border-0 bg-transparent"
								onClick={() => handleDelete(cartItem.id)}
							>
								delete
							</button>
						</div>
					</div>
					<QuantitySelector
						value={cartItem.qty}
						onChange={newQty => handleQuantityChange(cartItem.id, newQty)}
					/>
				</div>
			)
		}
	}
	return (
		<Table columns={columns} data={cart} renderRow={renderRow} emptyMessage="購物車沒有任何商品" />
	)
}
export default CartSection
