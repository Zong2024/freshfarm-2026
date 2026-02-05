import StepperSection from './components/StepperSection/StepperSection'
import CartSection from './components/CartSection/CartSection'
import FormSection from './components/FormSection/FormSection'
import { useEffect, useState } from 'react'
import { getCart } from '@/services/cart.api'

const Checkout = () => {
	const [cart, setCart] = useState({ carts: [], total: 0, finalTotal: 0 })

	useEffect(() => {
		const fetchCart = async () => {
			const response = await getCart()
			console.log(response)
			if (response.success) {
				setCart({
					carts: response.carts,
					total: response.total,
					finalTotal: response.finalTotal,
				})
			}
		}
		fetchCart()
	}, [])
	return (
		<div className="container py-5">
			<StepperSection />
			<CartSection cart={cart} setCart={setCart} />
			<FormSection cart={cart} />
		</div>
	)
}
export default Checkout
