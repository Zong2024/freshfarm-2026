import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_PATH = import.meta.env.VITE_API_PATH

const API_URL = `${BASE_URL}/api/${API_PATH}`
export const apiClient = axios.create({
	baseURL: API_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
})
