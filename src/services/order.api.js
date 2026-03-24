import { apiClient } from './api'

/**
 * 取得所有訂單
 */
export const getOrders = async () => {
  try {
    const response = await apiClient.get('/orders')
    const { orders, pagination } = response.data
    return { success: true, orders, pagination }
  } catch (error) {
    return {
      success: false,
      error: error.customMessage,
      code: error.statusCode,
    }
  }
}

/**
 * 取得單一訂單
 */
export const getOrder = async id => {
  try {
    const response = await apiClient.get(`/order/${id}`)
    return { success: true, order: response.data.order }
  } catch (error) {
    return {
      success: false,
      error: error.customMessage,
      code: error.statusCode,
    }
  }
}

/**
 * 建立訂單
 */
export const createOrder = async data => {
  try {
    const response = await apiClient.post('/order', { data })
    return {
      success: true,
      orderId: response.data.orderId,
      total: response.data.total,
      createAt: response.data.create_at,
      message: response.data.message,
    }
  } catch (error) {
    return {
      success: false,
      error: error.customMessage,
      code: error.statusCode,
    }
  }
}

/**
 * 付款
 */
export const payOrder = async orderId => {
  try {
    const response = await apiClient.post(`/pay/${orderId}`)
    return {
      success: true,
      message: response.data.message,
    }
  } catch (error) {
    return {
      success: false,
      error: error.customMessage,
      code: error.statusCode,
    }
  }
}
