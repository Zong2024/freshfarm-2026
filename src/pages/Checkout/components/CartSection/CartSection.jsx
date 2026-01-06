import checkoutImg from './assets/checkout-Image.jpg'
import checkoutImg1 from './assets/checkout-Image-1.jpg'
import checkoutImg2 from './assets/checkout-Image-2.jpg'
import checkoutImg3 from './assets/checkout-Image-3.jpg'
import { clsx } from 'clsx'
import styles from './CartSection.module.scss'

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
						{cartItems.map(item => (
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
									<div className="position-relative d-inline-block">
										<input
											type="number"
											className="form-control text-center"
											value={item.quantity}
											readOnly
										/>
										<span className="material-icons position-absolute top-50 start-0 translate-middle-y ms-3">
											remove
										</span>
										<span className="material-icons position-absolute top-50 end-0 translate-middle-y me-3">
											add
										</span>
									</div>
								</td>

								<td>NT$ {item.price}</td>

								<td className="fw-bold">NT$ {item.price * item.quantity}</td>

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
				{cartItems.map(item => (
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
									<span>NT$ {item.price}</span>
								</div>

								<div className="d-flex align-items-center">
									<small className="text-gray-400 pe-4">小計</small>
									<span className="fw-bold">NT$ {item.price * item.quantity}</span>
								</div>
							</div>

							<span className="material-icons text-danger">delete</span>
						</div>
						<div className="position-relative d-inline-block w-100">
							<input
								type="number"
								className="form-control text-center"
								value={item.quantity}
								readOnly
							/>{' '}
							<span
								className="material-icons position-absolute top-50 start-0 translate-middle-y ms-3 text-gray-200"
								style={{ cursor: 'pointer' }}
							>
								remove
							</span>
							<span
								className="material-icons position-absolute top-50 end-0 translate-middle-y me-3 text-primary-400"
								style={{ cursor: 'pointer' }}
							>
								add
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default CartSection
