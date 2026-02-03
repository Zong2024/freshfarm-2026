import { apiClient } from './api'

export const getProducts = async (page = 1) => {
	try {
		const response = await apiClient.get('/products', page)
		return {
			success: true,
			products: response.data.products,
			pagination: response.data.pagination,
		}
	} catch (error) {
		return {
			success: false,
			error: error.customMessage,
			code: error.statusCode,
		}
	}
}
export const getProduct = async id => {
	try {
		const response = await apiClient.get(`/products/${id}`)
		return {
			success: true,
			product: response.data.product,
		}
	} catch (error) {
		return {
			success: false,
			error: error.customMessage,
			code: error.statusCode,
		}
	}
}
