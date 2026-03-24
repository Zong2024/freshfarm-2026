import StepperSection from './components/StepperSection/StepperSection'
import FormSection from './components/FormSection/FormSection'
import { useCart } from '@/contexts/CartContext'
import { useAuth } from '@/contexts/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Toast from '@/utils/toast'
import CartSection from './components/CartSection/CartSection'

const Checkout = () => {
  const { cart, total, finalTotal } = useCart()
  const { isAuth, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth && !isLoading) {
      Toast.fire({
        icon: 'warning',
        title: '請先登入會員',
      })
      navigate('/login', { state: { from: '/checkout' } })
    }
  }, [isAuth, isLoading, navigate])

  return (
    <div className="container">
      <StepperSection step={2} />
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
