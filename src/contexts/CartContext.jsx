import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { getCart, postCart, putCart, deleteCart, deleteCarts } from '../services/cart.api'
import Toast from '../utils/toast'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])
	const [total, setTotal] = useState(0)
	const [finalTotal, setFinalTotal] = useState(0)
	const [loading, setLoading] = useState(false)

	const fetchCart = useCallback(async () => {
		setLoading(true)
		try {
			const res = await getCart()
			if (res.success) {
				setCart(res.carts || [])
				setTotal(res.total || 0)
				setFinalTotal(res.finalTotal || 0)
			}
		} catch (error) {
			console.error('取得購物車失敗:', error)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchCart()
	}, [fetchCart])

	const addToCart = async (product_id, qty = 1) => {
		setLoading(true)
		try {
			const res = await postCart({ product_id, qty })
			if (res.success) {
				await fetchCart()
				Toast.fire({
					icon: 'success',
					title: '已加入購物車',
				})
				return { success: true, message: '已加入購物車' }
			} else {
				Toast.fire({
					icon: 'error',
					title: res.error || '加入失敗',
				})
				return { success: false, message: res.error || '加入失敗' }
			}
		} catch (error) {
			Toast.fire({
				icon: 'error',
				title: '加入購物車發生錯誤',
			})
			return { success: false, message: error?.message || '加入購物車發生錯誤' }
		} finally {
			setLoading(false)
		}
	}

	const updateCartItem = async (product_id, qty) => {
		setLoading(true)
		try {
			const res = await putCart({ product_id, qty })
			if (res.success) {
				await fetchCart()
				Toast.fire({
					icon: 'success',
					title: '更新成功',
				})
				return { success: true, message: '更新成功' }
			} else {
				Toast.fire({
					icon: 'error',
					title: res.error || '更新失敗',
				})
				return { success: false, message: res.error || '更新失敗' }
			}
		} catch (error) {
			Toast.fire({
				icon: 'error',
				title: '更新購物車發生錯誤',
			})
			return { success: false, message: error?.message || '更新購物車發生錯誤' }
		} finally {
			setLoading(false)
		}
	}

	const removeCartItem = async id => {
		setLoading(true)
		try {
			const res = await deleteCart(id)
			if (res.success) {
				await fetchCart()
				Toast.fire({
					icon: 'success',
					title: res.message || '已刪除商品',
				})
				return { success: true, message: res.message || '已刪除商品' }
			} else {
				Toast.fire({
					icon: 'error',
					title: res.error || '刪除失敗',
				})
				return { success: false, message: res.error || '刪除失敗' }
			}
		} catch (error) {
			Toast.fire({
				icon: 'error',
				title: '刪除商品發生錯誤',
			})
			return { success: false, message: error?.message || '刪除商品發生錯誤' }
		} finally {
			setLoading(false)
		}
	}

	const clearCart = async () => {
		setLoading(true)
		try {
			const res = await deleteCarts()
			if (res.success) {
				await fetchCart()
				Toast.fire({
					icon: 'success',
					title: res.message || '購物車已清空',
				})
				return { success: true, message: res.message || '購物車已清空' }
			} else {
				Toast.fire({
					icon: 'error',
					title: '清空失敗',
				})
				return { success: false, message: '清空失敗' }
			}
		} catch (error) {
			Toast.fire({
				icon: 'error',
				title: '清空購物車發生錯誤',
			})
			return { success: false, message: error?.message || '清空購物車發生錯誤' }
		} finally {
			setLoading(false)
		}
	}

	const value = {
		cart,
		total,
		finalTotal,
		loading,
		fetchCart,
		addToCart,
		updateCartItem,
		removeCartItem,
		clearCart,
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
