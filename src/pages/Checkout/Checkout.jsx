import StepperSection from './components/StepperSection/StepperSection'
import CartSection from './components/CartSection/CartSection'
import FormSection from './components/FormSection/FormSection'

const Checkout = () => {
	return (
		<div className="container py-5">
			<StepperSection />
			<CartSection />
			<FormSection />
		</div>
	)
}
export default Checkout
