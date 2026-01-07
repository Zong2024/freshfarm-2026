import checkoutImg from './assets/checkout-Image.jpg'
import checkoutImg1 from './assets/checkout-Image-1.jpg'
import checkoutImg2 from './assets/checkout-Image-2.jpg'
import checkoutImg3 from './assets/checkout-Image-3.jpg'
import { clsx } from 'clsx'
import styles from './CartSection.module.scss'
import { useState } from 'react'
import QuantitySelector from '@/components/input/QuantitySelector/QuantitySelector'

const cartItems = [
	{
		id: 1,
		title: '嚴選大樹老欉玉荷包禮盒3斤',
		image: checkoutImg,
		price: 588,
		quantity: 1,
	},
	{
		id: 2,
		title: '玉井愛文芒果',
		image: checkoutImg1,
		price: 180,
		quantity: 3,
	},
	{
		id: 3,
		title: '有機蜜蘋果',
		image: checkoutImg2,
		price: 150,
		quantity: 5,
	},
	{
		id: 4,
		title: '屏東香米',
		image: checkoutImg3,
		price: 180,
		quantity: 1,
	},
]

const CartSection = () => {
	const [items, setItems] = useState(cartItems)

	const handleQuantityChange = (id, newQuantity) => {
		setItems(prev => prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item)))
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
						{items.map(item => (
							<tr key={item.id}>
								<th scope="row" className="d-flex align-items-center">
									<img
										src={item.image}
										alt={item.title}
										className="me-2 rounded-3"
										style={{ width: '60px' }}
									/>
									<span>{item.title}</span>
								</th>

								<td>
									<QuantitySelector
										value={item.quantity}
										max={15}
										onChange={newValue => handleQuantityChange(item.id, newValue)}
									/>
								</td>

								<td>NT$ {item.price.toLocaleString()}</td>

								<td className="fw-bold">NT$ {(item.price * item.quantity).toLocaleString()}</td>

								<td>
									<div className={styles.delete}>
										<span className="material-icons">delete</span>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* 手機樣式 */}
			<div className="d-lg-none">
				{items.map(item => (
					<div className={clsx('mb-6', styles.bg)} key={item.id}>
						<div className="d-flex align-items-top mb-3">
							<img
								src={item.image}
								alt={item.title}
								className="me-3 rounded-3"
								style={{ width: '80px' }}
							/>

							<div className="flex-grow-1">
								<p className="h6 text-primary-400 mb-2">{item.title}</p>

								<div className="d-flex align-items-center mb-2">
									<small className="text-gray-400 pe-4">單價</small>
									<span>NT$ {item.price.toLocaleString()}</span>
								</div>

								<div className="d-flex align-items-center">
									<small className="text-gray-400 pe-4">小計</small>
									<span className="fw-bold">
										NT$ {(item.price * item.quantity).toLocaleString()}
									</span>
								</div>
							</div>

							<span className="material-icons text-danger">delete</span>
						</div>
						<QuantitySelector
							value={item.quantity}
							max={15}
							onChange={newValue => handleQuantityChange(item.id, newValue)}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default CartSection
