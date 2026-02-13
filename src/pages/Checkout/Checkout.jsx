import StepperSection from './components/StepperSection/StepperSection'
import CartSection from './components/CartSection/CartSection'
import FormSection from './components/FormSection/FormSection'
import { useCart } from '@/context/cartContext'

const Checkout = () => {
	const { cart, total, finalTotal } = useCart()

	return (
		<div className="container py-5">
			<StepperSection />
			<CartSection cart={{ carts: cart, total, finalTotal }} />
			<FormSection cart={{ carts: cart, total, finalTotal }} />
		</div>
	)
}

export default Checkout
