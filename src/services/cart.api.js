import { apiClient } from './api'

export const getCart = async () => {
	try {
		const response = await apiClient.get(`/cart`)
		const { carts, total, final_total } = response.data.data

		return {
			success: true,
			carts,
			total,
			finalTotal: final_total,
		}
	} catch (error) {
		return {
			success: false,
			error: error.customMessage,
			code: error.statusCode,
		}
	}
}

export const postCart = async data => {
	if (!data?.product_id || typeof data.product_id !== 'string') {
		return { success: false, error: '無效的產品 ID' }
	}
	if (!data?.qty || typeof data.qty !== 'number' || data.qty <= 0) {
		return { success: false, error: '數量必須為大於 0 的數字' }
	}
	try {
		const response = await apiClient.post(`/cart`, { data })
		const { product } = response.data.data
		return {
			success: true,
			product,
		}
	} catch (error) {
		return {
			success: false,
			error: error.customMessage,
			code: error.statusCode,
		}
	}
}

export const putCart = async data => {
	if (!data?.product_id || typeof data.product_id !== 'string') {
		return { success: false, error: '無效的產品 ID' }
	}
	if (!data?.qty || typeof data.qty !== 'number' || data.qty <= 0) {
		return { success: false, error: '數量必須為大於 0 的數字' }
	}

	try {
		const response = await apiClient.put(`/cart/${data.product_id}`, { data })
		const { qty, product_id } = response.data.data
		console.log(response)

		return {
			success: true,
			cartId: product_id,
			qty: Number(qty),
		}
	} catch (error) {
		return {
			success: false,
			error: error.customMessage,
			code: error.statusCode,
		}
	}
}

export const deleteCart = async id => {
	try {
		const response = await apiClient.delete(`/cart/${id}`)
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

export const deleteCarts = async () => {
	try {
		const response = await apiClient.delete(`/carts`)
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
