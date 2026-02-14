import StepperSection from './components/StepperSection/StepperSection'
import CartSection from './components/CartSection/CartSection'
import FormSection from './components/FormSection/FormSection'
import { useCart } from '@/context/cartContext'

const Checkout = () => {
	const { cart, total, finalTotal } = useCart()

	return (
		<div className="container">
			<StepperSection />
			<div className="py-lg-9 py-8">
				<CartSection cart={{ carts: cart, total, finalTotal }} />
			</div>
			<div className="py-lg-9 py-8">
				<FormSection cart={{ carts: cart, total, finalTotal }} />
			</div>
		</div>
	)
}

export default Checkout
