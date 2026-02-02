import { apiClient } from './api'

export const getProducts = async () => {
	const response = await apiClient.get('/products')
	return response.data
}

export const getProduct = async id => {
	const response = await apiClient.get(`/product/${id}`)
	return response.data
}
