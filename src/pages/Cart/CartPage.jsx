import StepperSection from '../Checkout/components/StepperSection/StepperSection'
import CartSection from '../Checkout/components/CartSection/CartSection'
import { useCart } from '@/contexts/CartContext'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Toast from '@/utils/toast'

const CartPage = () => {
  const { cart, total, finalTotal } = useCart()
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  const isCartEmpty = cart.length === 0

  const handleCheckout = () => {
    if (!isAuth) {
      Toast.fire({
        icon: 'warning',
        title: '請先登入會員',
      })
      navigate('/login', { state: { from: '/checkout' } })
      return
    }
    navigate('/checkout')
  }

  return (
    <div className="container">
      <StepperSection step={1} />
      <div className="py-lg-9 py-8">
        <CartSection cart={{ carts: cart, total, finalTotal }} />
        <div className="d-flex justify-content-end mt-4">
          <button
            className="btn btn-primary btn-lg"
            onClick={handleCheckout}
            disabled={isCartEmpty}
          >
            前往結帳
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
