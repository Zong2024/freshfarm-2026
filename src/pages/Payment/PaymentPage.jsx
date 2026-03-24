import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOrder, payOrder } from '@/services/order.api'
import StepperSection from '../Checkout/components/StepperSection/StepperSection'
import Toast from '@/utils/toast'
import { currency } from '@/utils/currency'

const PaymentPage = () => {
  const { orderId } = useParams()
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return
      const res = await getOrder(orderId)
      if (res.success) {
        setOrder(res.order)
      } else {
        Toast.fire({ icon: 'error', title: '取得訂單失敗' })
        navigate('/')
      }
      setIsLoading(false)
    }
    fetchOrder()
  }, [orderId, navigate])

  const handlePayment = async () => {
    const res = await payOrder(orderId)
    if (res.success) {
      Toast.fire({ icon: 'success', title: '付款成功' })
      const updatedOrder = await getOrder(orderId)
      if (updatedOrder.success) {
        setOrder(updatedOrder.order)
      }
    } else {
      Toast.fire({ icon: 'error', title: '付款失敗' })
    }
  }

  if (isLoading) return <div className="text-center py-5">載入中...</div>
  if (!order) return <div className="text-center py-5">訂單不存在</div>

  return (
    <div className="container">
      <StepperSection step={3} />
      <div className="py-lg-9 py-8">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-header bg-primary text-white py-3 rounded-top-4">
                <h2 className="h5 mb-0 text-center">訂單明細</h2>
              </div>
              <div className="card-body p-lg-5 p-4">
                {/* 訂單資訊 */}
                <div className="row mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <p className="text-muted mb-1">訂單編號</p>
                    <p className="fw-bold">{order.id}</p>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <p className="text-muted mb-1">訂單日期</p>
                    <p className="fw-bold">
                      {new Date(order.create_at * 1000).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <hr className="my-4" />

                {/* 商品列表 */}
                <h3 className="h6 mb-3 text-primary-400">購買商品</h3>
                <div className="table-responsive mb-4">
                  <table className="table table-borderless align-middle">
                    <tbody>
                      {Object.values(order.products).map(item => (
                        <tr key={item.id} className="border-bottom">
                          <td style={{ width: '80px' }}>
                            <img
                              src={item.product.imageUrl}
                              alt={item.product.title}
                              className="img-fluid rounded"
                              style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                            />
                          </td>
                          <td>
                            <p className="mb-0 fw-bold">{item.product.title}</p>
                            <small className="text-muted">x {item.qty}</small>
                          </td>
                          <td className="text-end fw-bold">NT$ {currency(item.final_total)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 收件人資訊 */}
                <div className="bg-light p-4 rounded-3 mb-4">
                  <h3 className="h6 mb-3 text-primary-400">收件資訊</h3>
                  <p className="mb-1">
                    <span className="text-muted me-2">姓名:</span>
                    {order.user.name}
                  </p>
                  <p className="mb-1">
                    <span className="text-muted me-2">電話:</span>
                    {order.user.tel}
                  </p>
                  <p className="mb-1">
                    <span className="text-muted me-2">Email:</span>
                    {order.user.email}
                  </p>
                  <p className="mb-0">
                    <span className="text-muted me-2">地址:</span>
                    {order.user.address}
                  </p>
                </div>

                {/* 金額總計 */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="h5 mb-0">總金額</h3>
                  <p className="h3 text-primary fw-bold mb-0">NT$ {currency(order.total)}</p>
                </div>

                {/* 付款狀態與按鈕 */}
                <div className="d-grid gap-2">
                  {order.is_paid ? (
                    <div className="alert alert-primary text-center mb-0">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      已完成付款
                    </div>
                  ) : (
                    <button className="btn btn-primary btn-lg py-3 fw-bold" onClick={handlePayment}>
                      確認付款
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
